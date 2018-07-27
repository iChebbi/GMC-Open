import React from 'react'
import axios from 'axios'

import ProjectItem from './components/projectItem'
import Pagination from "react-js-pagination"
import ProjectModal from './components/projectModal'

import './Duration.css'
import { adaAPI } from '../../helpers';


class ProjectsList extends React.Component {

  state = {
    pageNumber: 1,
    pageCount: 0,
    pageSize: 10,
    currentProject: {},
    products: [],
    isOpen: false
  }

  componentDidMount = () => {
    this.fetchProjects()
  }

  renderProjects = projects => projects.map((projectAttribute, key) => <ProjectItem openModal={this.toggleModal} key={key} {...projectAttribute.product} />)

  handlePageChange = pageNumber => {
    this.fetchProjects(pageNumber)
  }

  toggleModal = currentProjectId => {
    if (typeof currentProjectId === 'string') this.fetchProject(currentProjectId)
    this.setState(state => ({ isOpen: !state.isOpen }))
  }

  fetchProjects = async (page = 1) => {
    try {
      const response = await axios(adaAPI + '/Products/Paginated/' + page)
      const { model, pageCount, pageSize, pageNumber } = response.data
      await this.setState({
        products: model,
        pageCount,
        pageSize,
        pageNumber
      })
    } catch (error) { }
  }

  fetchProject = async id => {
    try {
      const response = await axios.get(adaAPI + '/Products/' + id)
      await this.setState({ currentProject: response.data.model })
    } catch (error) { }
  }

  render() {
    const { isOpen, currentProject, products, pageCount, pageNumber, pageSize } = this.state;

    return (
      <div className='duration-container'>
        <h3 className="projects-title">Projects</h3>
        {products && products.length ? this.renderProjects(products) : <p>No Projects</p>}
        <Pagination
          activePage={pageNumber}
          itemsCountPerPage={pageSize}
          totalItemsCount={pageSize * pageCount}
          onChange={this.handlePageChange}
          linkClass='pagination-item'
          activeLinkClass='pagination-item-active'
          hideFirstLastPages
        />
        {isOpen && currentProject && <ProjectModal currentProject={currentProject} toggleModal={this.toggleModal} />}
      </div>
    )
  }
}

export default ProjectsList
