from moviepy import VideoFileClip
import os

input_path = "public/videos/coolbox_new.mp4"
output_path = "public/videos/coolbox_new_compressed.mp4"

clip = VideoFileClip(input_path)
clip_resized = clip.resized(height=720) # 720p

clip_resized.write_videofile(
    output_path,
    codec="libx264",
    audio_codec="aac",
    bitrate="1000k",
    preset="fast"
)
