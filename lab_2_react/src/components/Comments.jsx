import React, { useState, useEffect } from 'react';
import { fetchComments } from "../utils/utils";

function Comments() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchComments().then(data => {
            if (data) {
                setComments(data)
            }
        })
    }, []);

    return (
        <section className="mb-10">
            <h2 className="text-lg uppercase tracking-widest mb-4 border-b-2 border-gray-200 pb-2 font-bold text-gray-800 dark:border-gray-700 dark:text-gray-200">
                Коментарі
            </h2>
            
            {comments.map(comment =>
                <div key={comment.id} className="mb-4">
                    <h4 className="font-semibold dark:text-gray-200">{comment.name} ({comment.email})</h4>
                    <p className="text-gray-700 dark:text-gray-400">{comment.body}</p>    
                </div>
            )}
        </section>
    );
}

export default Comments;