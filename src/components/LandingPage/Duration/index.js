import React from 'react'
import ProjectItem from './components/project'
import Pagination from "react-js-pagination"
import ProjectModal from './components/projectModal'

import './Duration.css'

const projects = [
  {
    id: 1,
    name: 'My Awesome react Project 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium libero non debitis natus corrupti. Quas quos consectetur omnis. Eligendi fuga delectus temporibus similique nostrum ratione quo harum architecto quae eaque, Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium libero non debitis natus corrupti. Quas quos consectetur omnis. Eligendi fuga delectus temporibus similique nostrum ratione quo harum architecto quae eaque.',
    image: 'https://ph-files.imgix.net/5bdc8054-b21a-46e0-9d90-bb4e205bf4dc?auto=format&auto=compress&codec=mozjpeg&cs=strip',
    logo: 'https://ph-files.imgix.net/877d9053-9d1f-4e61-99b3-5b41532b5af8?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',
    keywords: '[{"id":"qsd","text":"qsd"},{"id":"qsdd","text":"qsdd"}]',
    url: 'https://github.com/GoMyCodeAfrica',
    email: 'author@gomycode.co'
  },
  {
    id: 2,
    name: 'My Awesome react Project 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium libero non debitis natus corrupti. Quas quos consectetur omnis. Eligendi fuga delectus temporibus similique nostrum ratione quo harum architecto quae eaque, Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium libero non debitis natus corrupti. Quas quos consectetur omnis. Eligendi fuga delectus temporibus similique nostrum ratione quo harum architecto quae eaque.',
    image: 'https://ph-files.imgix.net/5bdc8054-b21a-46e0-9d90-bb4e205bf4dc?auto=format&auto=compress&codec=mozjpeg&cs=strip',
    logo: 'https://ph-files.imgix.net/877d9053-9d1f-4e61-99b3-5b41532b5af8?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',
    keywords: '[{"id":"qsd","text":"qsd"},{"id":"qsdd","text":"qsdd"}]',
    url: 'https://github.com/GoMyCodeAfrica',
    email: 'author@gomycode.co'
  },
  {
    id: 3,
    name: 'My Awesome react Project 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium libero non debitis natus corrupti. Quas quos consectetur omnis. Eligendi fuga delectus temporibus similique nostrum ratione quo harum architecto quae eaque, Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium libero non debitis natus corrupti. Quas quos consectetur omnis. Eligendi fuga delectus temporibus similique nostrum ratione quo harum architecto quae eaque.',
    image: 'https://ph-files.imgix.net/5bdc8054-b21a-46e0-9d90-bb4e205bf4dc?auto=format&auto=compress&codec=mozjpeg&cs=strip',
    logo: 'https://ph-files.imgix.net/877d9053-9d1f-4e61-99b3-5b41532b5af8?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',
    keywords: '[{"id":"qsd","text":"qsd"},{"id":"qsdd","text":"qsdd"}]',
    url: 'https://github.com/GoMyCodeAfrica',
    email: 'author@gomycode.co'
  },
  {
    id: 4,
    name: 'My Awesome react Project 4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium libero non debitis natus corrupti. Quas quos consectetur omnis. Eligendi fuga delectus temporibus similique nostrum ratione quo harum architecto quae eaque, Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium libero non debitis natus corrupti. Quas quos consectetur omnis. Eligendi fuga delectus temporibus similique nostrum ratione quo harum architecto quae eaque.',
    image: 'https://ph-files.imgix.net/5bdc8054-b21a-46e0-9d90-bb4e205bf4dc?auto=format&auto=compress&codec=mozjpeg&cs=strip',
    logo: 'https://ph-files.imgix.net/877d9053-9d1f-4e61-99b3-5b41532b5af8?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',
    keywords: '[{"id":"qsd","text":"qsd"},{"id":"qsdd","text":"qsdd"}]',
    url: 'https://github.com/GoMyCodeAfrica',
    email: 'author@gomycode.co'
  },
  {
    id: 5,
    name: 'My Awesome react Project 5',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium libero non debitis natus corrupti. Quas quos consectetur omnis. Eligendi fuga delectus temporibus similique nostrum ratione quo harum architecto quae eaque, Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium libero non debitis natus corrupti. Quas quos consectetur omnis. Eligendi fuga delectus temporibus similique nostrum ratione quo harum architecto quae eaque.',
    image: 'https://ph-files.imgix.net/5bdc8054-b21a-46e0-9d90-bb4e205bf4dc?auto=format&auto=compress&codec=mozjpeg&cs=strip',
    logo: 'https://ph-files.imgix.net/877d9053-9d1f-4e61-99b3-5b41532b5af8?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',
    keywords: '[{"id":"qsd","text":"qsd"},{"id":"qsdd","text":"qsdd"}]',
    url: 'https://github.com/GoMyCodeAfrica',
    email: 'author@gomycode.co'
  },
  {
    id: 6,
    name: 'My Awesome react Project 6',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium libero non debitis natus corrupti. Quas quos consectetur omnis. Eligendi fuga delectus temporibus similique nostrum ratione quo harum architecto quae eaque, Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium libero non debitis natus corrupti. Quas quos consectetur omnis. Eligendi fuga delectus temporibus similique nostrum ratione quo harum architecto quae eaque.',
    image: 'https://ph-files.imgix.net/5bdc8054-b21a-46e0-9d90-bb4e205bf4dc?auto=format&auto=compress&codec=mozjpeg&cs=strip',
    logo: 'https://ph-files.imgix.net/877d9053-9d1f-4e61-99b3-5b41532b5af8?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',
    keywords: '[{"id":"qsd","text":"qsd"},{"id":"qsdd","text":"qsdd"}]',
    url: 'https://github.com/GoMyCodeAfrica',
    email: 'author@gomycode.co'
  },
]

const itemPerPage = 10

class Duration extends React.Component {

  state = {
    currentPage: 1,
    currentProject: {},
    items: projects.slice(0, itemPerPage),
    isOpen: false
  }

  renderProjects = projects => projects.map((projectAttribute, key) => <ProjectItem openModal={this.toggleModal} key={key} {...projectAttribute} />)

  handlePageChange = currentPage => {
    const firstIndex = (currentPage - 1) * itemPerPage
    const lastIndex = firstIndex + itemPerPage

    this.setState({
      currentPage,
      items: projects.slice(firstIndex, lastIndex)
    })
  }

  toggleModal = currentProjectIndex => {
    const currentProject = this.state.items.find(el => el.id === currentProjectIndex)

    this.setState(state => ({
      isOpen: !state.isOpen,
      currentProject
    }))
  }

  render() {
    const { items } = this.state
    const { isOpen, currentProject } = this.state;

    return (
      <div className='duration-container'>
        <h3 className="projects-title">Latest projects</h3>
        {items && items.length ? this.renderProjects(items) : <p>No Projects</p>}
        <Pagination
          activePage={this.state.currentPage}
          itemsCountPerPage={itemPerPage}
          totalItemsCount={projects.length}
          onChange={this.handlePageChange}
          linkClass='pagination-item'
          activeLinkClass='pagination-item-active'
          hideFirstLastPages
        />
        {isOpen && <ProjectModal currentProject={currentProject} toggleModal={this.toggleModal} />}
      </div>
    )
  }
}

export default Duration
