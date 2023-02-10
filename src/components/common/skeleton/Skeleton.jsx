import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={3}
    width={280}
    height={440}
    viewBox="0 0 280 440"
    backgroundColor="#f3f3f3"
    foregroundColor="#ebeaf1"
    {...props}
  >
    <rect x="95" y="263" rx="0" ry="0" width="1" height="1" /> 
    <rect x="1" y="16" rx="0" ry="0" width="2" height="0" /> 
    <rect x="7" y="27" rx="0" ry="0" width="272" height="384" />
  </ContentLoader>
)

export default MyLoader