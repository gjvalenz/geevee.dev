import ProjectCard, { Project } from '@/components/ProjectCard'

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

// organization comparation scheme for projects
const comp = (a: Project, b: Project) =>
{
    if(a.url && !b.url)
        return -1
    if(b.url && !a.url)
        return 1
    else
    {
        if(a.github_url && !b.github_url)
            return -1
        if(b.github_url && !a.github_url)
            return 1
        else
            return 0
    }
}

export default async () => {
    const projects = await getData()
    return (
        <main className="flex flex-col items-center py-20">
            {projects && projects.sort(comp).map((project, i: number) => (<ProjectCard {...project} key={i} />))}
        </main>
    )
}