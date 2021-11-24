const FooterItem = ({title, links, key, secondaryClass}) => {
  return(
    <div key={key} className={secondaryClass}>
    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{title}</h3>
    <ul role="list" className="mt-4 space-y-4">
      {links.map((item) => (
        <li key={item.id}>
          <a href={item.link} className="text-base text-gray-300 hover:text-white">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default FooterItem;
