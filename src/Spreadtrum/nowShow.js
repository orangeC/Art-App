import React, { PropTypes } from 'react';
import {  Link} from 'react-router';
import Img1 from '../images/home/first/now/1.jpg'
import Img2 from '../images/home/first/now/2.jpg'
import Img3 from '../images/home/first/now/3.jpg'
import Img4 from '../images/home/first/now/4.jpg'
import Img5 from '../images/home/first/now/5.jpg'
class NowShow extends React.Component {
  render () {
    let styles={
      pic:{
        width:'100%',
        height:'28vh'
      }
    }
    return(
      <div>

        <div className="now_pic"><Link to="/xiaoge"> <img src={Img1}  style={styles.pic}/></Link></div>
        <div className="now_pic"><Link to="/cjy"> <img src={Img2} style={styles.pic}/></Link></div>
        <div className="now_pic"><Link to="/xiaoge"> <img src={Img3} style={styles.pic}/></Link></div>
        <div className="now_pic"><Link to="/xiaoge"> <img src={Img4} style={styles.pic}/></Link></div>
        <div className="now_pic"><Link to="/xiaoge"> <img src={Img5} style={styles.pic}/></Link></div>
      </div>
    )

  }
}

export default NowShow;
