import React from "react"
import SubHeaders from "../components/introsection/Sub-header"
import IntroVideo from "../components/introVideo/introVideo"
import parse from "html-react-parser"
import "../styles/pages/webinarDetail.styles.scss"

//connect with redux
import { connect } from "react-redux"

class WebinarDetail extends React.Component {
  render() {
    //get the target webinar detail
    const id = this.props.match.params.id
    const webinarList = this.props.webinarList.data
    const webinarDetail = webinarList.find((element) => {
      return element.id == id
    })
    console.log(webinarDetail)

    //demo title and subTitle for detail Page
    const title = webinarDetail.title || "网络讲座"
    const subTitle =
      parse(webinarDetail.content) ||
      "ACY 稀万证劵为大家推出全新网络课程,不管您是外汇新手,还是有一定经验的投资者,我们相信只有打下坚实的基础才能在外汇市场中生存"

    const content_title = `ACY 稀万证劵高级分析师, ${webinarDetail.creator.nick_name}`
    const content_body =
      "从事金融行业多年，曾获资产管理优秀讲师称号。华中区域高级分析师，参与工商银行渠道投资建设服务。多年国家基金园区工作经验。业内各大经济媒体评论员。业内各大经济媒体评论员。门萨俱乐部中国大陆会员。具备系统的金融理论知识和实盘操作经验，擅长简化投资策略，注重可操作性。对裸K、仓位、交易系统、投资品种交易周期等有独到见解。"

    return (
      <div className="detail-wrapper">
        <SubHeaders title={title} subTitle={subTitle} startAlign={true} />
        <IntroVideo
          cn={true}
          content_title={content_title}
          content_body={content_body}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  webinarList: state.webinarReducer.webinar_list.data,
})

export default connect(mapStateToProps)(WebinarDetail)
