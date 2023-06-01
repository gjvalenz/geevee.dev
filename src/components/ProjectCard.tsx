'use client'

import { useEffect, useState } from 'react'
import Link from '@/components/Link'
import { Player } from 'video-react'

import 'video-react/dist/video-react.css'

interface ReadMoreProps
{
    clicked: boolean,
    callback: CallableFunction,
    short_description: string,
    skills: string,
    github_url: string,
    url: string
}

function ReadMore(props: ReadMoreProps) {
    const { clicked, callback, short_description, skills, github_url, url } = props
    const bottom_classes: string = `underline underline-offset-4 decoration-2 \
    decoration-emerald-300 hover:decoration-lime-600 text-black \
    hover:font-bold cursor-pointer mb-12 mt-2`
    if(!clicked)
        return (
            <p className={bottom_classes + ' mt-2'} onClick={() => callback(true)}>read more</p>
        )
    return (
      <>
        <p className='mt-2 max-w-lg text-center'>{short_description}</p>
        { url && <div className='flex flex-col max-w-lg mt-2'>
          <div className='flex flex-row content-between'>
          <Link url={url} className='px-2'>demo</Link>
          {github_url && <Link url={github_url} className='px-2'>github</Link> }
          </div>
        </div>}
        { !url && <>
          { github_url && <Link url={github_url} className='mt-2'>github</Link>}
        </>}
        {!github_url &&
          <p className='mt-2 text-sm italic'>Please contact me for further details about the code. I&apos;ll be happy to talk about it!</p>}
        <p className='mt-2 max-w-lg text-center text-sm text-slate-500'>tech: {skills}</p>
        <p className={bottom_classes} onClick={() => callback(false)}>collapse</p>
      </>
    );
  }

export interface Project
{
    _id: string,
    story: string,
    url: string,
    short_description: string,
    flipped?: boolean,
    square?: boolean,
    name: string,
    github_url: string,
    skills: string,
    image_url: string,
    video: string
}

interface Props extends Project
{
    key: number
}

export default function ProjectCard(props: Props){
    const { _id: id_, story, url, short_description,
        flipped: flipped = false, square: square = false,
        name: nm, github_url, skills, image_url, video } = props
    const [ clicked, setClicked ] = useState(false)
    const [ useVideo, setVideo ] = useState(false)
    useEffect(() => setVideo(true), []) // dumb little hack because hydration
    return (
        <div className='flex flex-col items-center'>
            <Link url={ url ? url : '/projects/#'} sizing='text-3xl' className='mb-8'>{nm}</Link>
            {useVideo && video && <Player playsInline height={320} width={640} fluid={false} src={image_url}></Player>}
            {!video && !flipped && !square && <img src={image_url} height={320} width={640}/>}
            {!video && flipped && <img src={image_url} style={{height:580, width: 320}}/>}
            {square && <img src={image_url} style={{height:480, width: 480}}/>}
            <p className='text-xl mt-4'>{story}</p>
            <ReadMore clicked={clicked} callback={(bool: boolean) => {setClicked(bool)}}
            short_description={short_description} skills={skills} github_url={github_url} url={url} />
        </div>
    )
}