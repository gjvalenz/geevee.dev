import React from 'react'

import OLink from 'next/link'

interface Props
{
    url: string,
    className?: string,
    sizing?: string,
    children: string
}

export default function Link(props: Props) {
    const { url: _url, className, sizing, children } = props
    const base_url = 'http://localhost:3000'
    let url: URL
    try{
        url = new URL(_url)
    } catch(e)
    {
        url = new URL(_url, base_url)   
    }
    //const url: URL = new URL(_url)
    //const as: URL|null = _as ? new URL(_as) : null
    const default_styling: string = `underline underline-offset-4 decoration-2 \
    decoration-emerald-300 hover:decoration-lime-600 text-black \
    hover:font-bold cursor-pointer`
    const size: string = sizing ? sizing : 'text-base'
    const composed_classes: string = default_styling + ' ' + size
    const classes: string = className ? composed_classes + ' ' + className : composed_classes
    return (
        <OLink href={url} passHref legacyBehavior>
            <a className={classes}>{children}</a>
        </OLink>
    );
};