import React from "react"
import ContentLoader from "react-content-loader"

const CategoriesLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1224}
    height={44}
    viewBox="0 0 1224 44"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx='10' ry='10' width="150" height="44" /> 
    <rect x="160" y="0" rx='10' ry='10' width="150" height="44" /> 
    <rect x="320" y="0" rx='10' ry='10' width="150" height="44" /> 
    <rect x="480" y="0" rx='10' ry='10' width="150" height="44" /> 
    <rect x="999" y="0" rx='10' ry='10' width="225" height="44" />
  </ContentLoader>
)

export default CategoriesLoader
