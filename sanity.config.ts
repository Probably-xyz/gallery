import {defineConfig} from "sanity"
import {deskTool} from "sanity/desk"
import project from "./sanity/schemas/project-schema";



const config = defineConfig({
    projectId: "jyyz2rem",
    dataset: "production",
    title: "",
    apiVersion: "2023-07-11",
    basePath: "/blogAdmin",
    plugins: [deskTool()],
    schema: {types: [project]}
});

export default config