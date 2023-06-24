import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

type ButtonProps = {
    href?: Url
    onClick?: () => void
    children: ReactNode
}

function ButtonDark(props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & ButtonProps): JSX.Element {
    if(props.href) {
        return <Link href={props.href} className={`${props.disabled ? 'cursor-not-allowed' : 'cursor-pointer'} flex items-center justify-center w-full whitespace-nowrap font-poppins border focus:outline-none focus:ring-1 font-medium text-sm px-2 md:px-5 py-1 md:py-2.5 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700`}>{props.children}</Link>
    } else {
        return <button {...props} onClick={props.onClick} className={`${props.disabled ? 'cursor-not-allowed' : 'cursor-pointer'} flex items-center justify-center w-full whitespace-nowrap font-poppins border focus:outline-none focus:ring-1 font-medium text-sm px-2 md:px-5 py-1 md:py-2.5 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700`}>{props.children}</button>
    }
    
}

export default ButtonDark
