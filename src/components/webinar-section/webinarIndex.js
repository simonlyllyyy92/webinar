import React from "react"
import { connect } from "react-redux"
import { getPostList, getMorePostList } from "../../store/webinar/action"
import WebinarSection from "./webinar-section"

class WebinarIndex extends React.Component {
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
      <WebinarSection
        loadingStatus={this.props.loadingStatus}
        handleScroll={this.handleOnScroll}
        webinarList={this.props.webinarList.data}
        favorited={false}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(WebinarIndex)
