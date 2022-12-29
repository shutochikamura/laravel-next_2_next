type LabelType = {
    className?: string
    children: string
    htmlFor?: string
}

const Label = ({ className, children, ...props }: LabelType) => (
    <label
        className={`${className} block font-medium text-sm text-gray-700`}
        {...props}>
        {children}
    </label>
)

export default Label
