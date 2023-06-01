import ProjectCard, { Project } from '@/components/ProjectCard'

interface Props
{
    projects: [Project]
}

async function getData() {
    // extra options cause cache to be revalidated after 10 seconds
    const res = await fetch('https://website-373507-default-rtdb.firebaseio.com/projects.json', { next: { revalidate: 10 } })
    const data = await res.json()
    let projects = []
    for(let key in data)
    {
        if(data.hasOwnProperty(key))
        {
            projects.push(data[key])
        }
    }
    return projects
}

export default async () => {
    const projects = await getData()
    return (
        <main className="flex flex-col items-center py-20">
            {projects && projects.map((project, i: number) => (<ProjectCard {...project} key={i} />))}
        </main>
    )
}