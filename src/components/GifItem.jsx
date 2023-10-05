import PropType from 'prop-types'

export const GifItem = ( {title, url} ) => {
  return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}

GifItem.protoType = {
  title: PropType.string.isRequired,
  url: PropType.string.isRequired
}
