type AuthSessionStatusType = {
    status: string | string[] | null
    className?: string
}

const AuthSessionStatus = ({ status, className, ...props }: AuthSessionStatusType) => (
    <>
        {status && (
            <div
                className={`${className} font-medium text-sm text-green-600`}
                {...props}>
                {status}
            </div>
        )}
    </>
)

export default AuthSessionStatus
