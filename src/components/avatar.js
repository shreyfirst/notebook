import React from 'react'
import { Avatar as Base } from 'theme-ui'

const Avatar = ({ size = 48, ...props }) => (
  <Base
    {...props}
    size={size}
    src="https://scontent-lax3-2.cdninstagram.com/v/t51.2885-19/s320x320/141109163_3941240225889046_6066970745713957948_n.jpg?tp=1&_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_ohc=YSndtVuKH7EAX_yFW72&oh=4dcdf4776a8481c1a2af76619a57f276&oe=606D49F8"
    alt="Shrey's avatar"
    mr={3}
  />
)

export default Avatar
