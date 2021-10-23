import { useState } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

import Head from "next/head";
import Image from "next/image";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Home: NextPage = () => {
    const [article, setArticle] = useState("");
    return (
        <div className="container mx-auto">
            <ReactQuill
                onChange={(content) => {
                    setArticle(content);
                }}
                theme="snow"
                modules={{
                    toolbar: [
                        [{ header: [2, 3, 4, 5, false] }],
                        ["bold", "italic", "underline", "strike", "blockquote"],
                        [
                            { list: "ordered" },
                            { list: "bullet" },
                            { indent: "-1" },
                            { indent: "+1" },
                        ],
                        ["link", "image"],
                        ["clean"],
                    ],
                }}
            />
        </div>
    );
};

export default Home;
