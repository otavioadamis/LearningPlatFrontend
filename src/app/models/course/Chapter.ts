import { VideoLesson } from "./VideoLesson";

export interface Chapter {
    id: string;
    title: string;
    videos: VideoLesson[];
    videoLessonDTOs: VideoLesson[];
}