type InputType = {
    disabled?: boolean,
    className?: string,
    id?: string,
    type: string,
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    autoFocus?: boolean,
    required?: boolean,
    autoComplete?: string
}

const Input = ({ disabled = false, className, ...props }: InputType) => (
    <input
        disabled={disabled}
        className={`${className} rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
        {...props}
    />
)

export default Input
