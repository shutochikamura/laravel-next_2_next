import {
  Search,
  PersonOutline,
  ShoppingCart,
  CheckBoxOutlineBlank,
  CheckBox,
  Cancel,
  CloudUpload,
  Close,
  GitHub,
  Person,
  ShoppingBag,
  Home,
  GetApp,
  Settings,
  Logout,
  CurrencyExchange,
  Schedule,
  Widgets
} from '@mui/icons-material'
import SvgIcon from '@mui/material/SvgIcon'

export interface IconButtonProps {
  onClick?: React.MouseEventHandler<SVGSVGElement>
  className?: string
}

function withIconStyle(
  Icon: typeof SvgIcon
): React.ComponentType<IconButtonProps> {
  const IconWithStyle = (props: IconButtonProps) => {
    const { onClick, className } = props
    const cursor = onClick ? 'cursorPointer' : ''

    return (
      <div className={cursor} >
          <style jsx>{`
            .cursorPointer {
              cursor: pointer;
            }
          `}</style>
        <Icon
          className={className}
          fontSize="inherit"
          color="inherit"
          onClick={onClick}
        />
      </div>
    )
  }
  return IconWithStyle
}

export const CloseIcon = withIconStyle(Close)
export const SearchIcon = withIconStyle(Search)
export const CloudUploadIcon = withIconStyle(CloudUpload)
export const CancelIcon = withIconStyle(Cancel)
export const CheckBoxOutlineBlankIcon = withIconStyle(CheckBoxOutlineBlank)
export const CheckBoxIcon = withIconStyle(CheckBox)
export const PersonIcon = withIconStyle(Person)
export const GitHubIcon = withIconStyle(GitHub)
export const PersonOutlineIcon = withIconStyle(PersonOutline)
export const ShoppingCartIcon = withIconStyle(ShoppingCart)
export const ShoppingBagIcon = withIconStyle(ShoppingBag)
export const HomeIcon = withIconStyle(Home)
export const GetAppIcon = withIconStyle(GetApp)
export const SettingsIcon = withIconStyle(Settings)
export const LogoutIcon = withIconStyle(Logout)
export const CurrencyExchangeIcon = withIconStyle(CurrencyExchange)
export const ScheduleIcon = withIconStyle(Schedule)
export const WidgetsIcon = withIconStyle(Widgets)

