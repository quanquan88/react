/*
 * @Author: quan
 * @Date: 2022-05-26 23:07:31
 * @LastEditors: quan
 * @LastEditTime: 2022-05-26 23:51:35
 * @Description: file content
 */
import React from 'react'
// 校验工具
import PropTypes from 'prop-types'

// 类型校验
type Props = {
    type: string,
    className?: string,
    onClick?: () => void
}

function Icon({ type, className, ...rest }: Props) {
  return (
    <svg {...rest} className={`icon ${className}`} aria-hidden="true">
        <use xlinkHref={`#${type}`}/>
    </svg>
  )
}

export default Icon
