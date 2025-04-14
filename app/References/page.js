'use client';

import React from 'react';

const Page = () => {
    const openWorklog = () => {
        window.open('/pdfs/Worklog.pdf', '_blank', 'noopener,noreferrer');
    };

    return (
        <div className={'mt-52'}>
            <div>
                <h2>
                    Image Sources
                </h2>
            </div>

            <div>
                Copyright Checklist: <a href={''}>Here</a>
            </div>

            <div>
                Worklog: <button onClick={openWorklog} className="text-blue-500 underline">Here</button>
            </div>

            <div>
                Technologies used: Next.JS, TailwindCSS, ShadCN
            </div>
        </div>
    );
};

export default Page;