import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

type ButtonProps = {
    href?: Url
    onClick?: () => void
    children: ReactNode
}

function ButtonLight(props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & ButtonProps): JSX.Element {
    if(props.href) {
        return <Link href={props.href} className={`${props.disabled ? 'cursor-not-allowed' : 'cursor-pointer'} flex items-center justify-center w-full whitespace-nowrap border focus:outline-none focus:ring-1 font-medium text-sm px-2 md:px-5 py-1 md:py-2.5 bg-white text-gray-800 border-gray-600 hover:text-white hover:bg-gray-400 focus:ring-gray-700`}>{props.children}</Link>
    } else {
        return <button {...props} onClick={props.onClick} className={`${props.disabled ? 'cursor-not-allowed' : 'cursor-pointer'} flex items-center justify-center w-full whitespace-nowrap border focus:outline-none focus:ring-1 font-medium text-sm px-2 md:px-5 py-1 md:py-2.5 bg-white text-gray-800 border-gray-600 hover:text-white hover:bg-gray-400 focus:ring-gray-700`}>{props.children}</button>
    }
    
}

export default ButtonLight
