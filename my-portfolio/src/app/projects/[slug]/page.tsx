'use client'

import { useProjectsContext } from '@/context/ProjectsContext'

export default function page() {
    const { data } = useProjectsContext()

    return (
        <div className="flex">
            <div>
                <h4>Technologies Used</h4>
                <p>
                    As a Frontend Developer, I was responsible for implementing
                    the user interface, integrating with backend services, and
                    ensuring a responsive and user-friendly design. I also
                    contributed to code reviews and collaborated with the design
                    team to refine the user experience.
                </p>
            </div>
            <div>
                <h4>My Role</h4>
                <p>
                    As a Frontend Developer, I was responsible for implementing
                    the user interface, integrating with backend services, and
                    ensuring a responsive and user-friendly design. I also
                    contributed to code reviews and collaborated with the design
                    team to refine the user experience.
                </p>
            </div>
        </div>
    )
}
