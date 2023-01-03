type BadgeType = {
  color?: 'gray' | 'blue'
  children: string
}

const Badge = ({ color, children }: BadgeType) => {
  if (typeof color === undefined ) return null
  if (color === 'gray') return (
    <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
      {children}
    </span>
  )
  
  return (
    <span className={`inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200`}>
      {children}
    </span>
  )

}

export default Badge
