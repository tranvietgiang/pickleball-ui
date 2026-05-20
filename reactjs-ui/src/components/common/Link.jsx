import { navigateTo } from '../../utils/navigation'

function Link({ href, className = '', children, onNavigate }) {
  return (
    <a
      href={href}
      className={className}
      onClick={(event) => {
        event.preventDefault()
        navigateTo(href)
        onNavigate?.()
      }}
    >
      {children}
    </a>
  )
}

export default Link
