import React from "react"
import Card from "./card"
import "../../styles/component/webiar-section/webinarSection.styles.scss"

import { connect } from "react-redux"
import { getPostList, getMorePostList } from "../../store/webinar/action"
import Spinner from "../spinner/spinner"

class WebinarSection extends React.Component {
  //get post list
  componentDidMount() {
    this.props.getPostList({
      per_page: 12,
      page: 1,
    })
  }

  handleOnScroll = (e) => {
    let element = e.target
    if (element.scrollWidth === element.scrollLeft + element.clientWidth) {
      console.log(this.props.webinarList.meta.pagination.links.next)
      this.props.getMorePostList(
        this.props.webinarList.meta.pagination.links.next
      )
    }
  }

  render() {
    return (
      <div className="webinar-section">
        {this.props.loadingStatus ? (
          <Spinner />
        ) : (
          <div
            className="webinar-card-container"
            onScroll={this.handleOnScroll}
          >
            {this.props.webinarList.data
              .filter((item) => {
                return item.favourited === false
              })
              .map((item) => (
                <Card
                  key={item.id}
                  created_at={item.created_at}
                  title={item.title}
                  content={item.content}
                />
              ))}
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  webinarList: state.webinarReducer.webinar_list.data,
  loadingStatus: state.webinarReducer.webinar_list.loading,
})

const mapDispatchToProps = (dispatch) => ({
  getPostList: (payload) => dispatch(getPostList(payload)),
  getMorePostList: (payload) => dispatch(getMorePostList(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(WebinarSection)
