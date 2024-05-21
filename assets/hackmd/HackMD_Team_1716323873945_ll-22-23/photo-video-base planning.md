---
title: photo-video-base planning

---

# photo-video-base ffprobe planning 20230818

### Current fields

- filename
    - short string
- shoot
    - short string
- device 
    - short string
- codec_name
    - short string
- profile
    - short string
- codec_type
    - short string
- width
    - number
- height
    - number
- pix_fmt
    - short string
- color_space
    - short string
- color_transfer
    - short string
- color_primaries
    - short string
- time_base
    - short string
- duration_ts
    - number
- duration
    - number
- bit_rate
    - short string
- bits_per_raw_sample
    - short string
- creation_time
    - short string
- timecode
    - short string
- json
    - long string



### Sample JSON
```
{
    "streams": [
        {
            "index": 0,
            "codec_name": "prores",
            "codec_long_name": "Apple ProRes (iCodec Pro)",
            "profile": "Standard",
            "codec_type": "video",
            "codec_tag_string": "apcn",
            "codec_tag": "0x6e637061",
            "width": 4096,
            "height": 2160,
            "coded_width": 4096,
            "coded_height": 2160,
            "closed_captions": 0,
            "film_grain": 0,
            "has_b_frames": 0,
            "sample_aspect_ratio": "1:1",
            "display_aspect_ratio": "256:135",
            "pix_fmt": "yuv422p10le",
            "level": -99,
            "color_space": "bt709",
            "color_transfer": "bt709",
            "color_primaries": "bt709",
            "field_order": "progressive",
            "refs": 1,
            "id": "0x1",
            "r_frame_rate": "24/1",
            "avg_frame_rate": "24/1",
            "time_base": "1/24000",
            "start_pts": 0,
            "start_time": "0.000000",
            "duration_ts": 876000,
            "duration": "36.500000",
            "bit_rate": "444118824",
            "bits_per_raw_sample": "10",
            "nb_frames": "876",
            "disposition": {
                "default": 1,
                "dub": 0,
                "original": 0,
                "comment": 0,
                "lyrics": 0,
                "karaoke": 0,
                "forced": 0,
                "hearing_impaired": 0,
                "visual_impaired": 0,
                "clean_effects": 0,
                "attached_pic": 0,
                "timed_thumbnails": 0,
                "captions": 0,
                "descriptions": 0,
                "metadata": 0,
                "dependent": 0,
                "still_image": 0
            },
            "tags": {
                "creation_time": "2021-08-08T05:14:42.000000Z",
                "language": "eng",
                "handler_name": "VideoHandler",
                "vendor_id": "appl",
                "encoder": "Apple ProRes 422",
                "timecode": "06:14:42:00"
            }
        },
        {
            "index": 1,
            "codec_name": "hevc",
            "codec_long_name": "H.265 / HEVC (High Efficiency Video Coding)",
            "profile": "Main",
            "codec_type": "video",
            "codec_tag_string": "hvc1",
            "codec_tag": "0x31637668",
            "width": 1280,
            "height": 674,
            "coded_width": 1280,
            "coded_height": 680,
            "closed_captions": 0,
            "film_grain": 0,
            "has_b_frames": 0,
            "sample_aspect_ratio": "1:1",
            "display_aspect_ratio": "640:337",
            "pix_fmt": "yuv420p",
            "level": 93,
            "color_range": "tv",
            "color_space": "bt709",
            "color_transfer": "bt709",
            "color_primaries": "bt709",
            "chroma_location": "left",
            "refs": 1,
            "id": "0x2",
            "r_frame_rate": "24/1",
            "avg_frame_rate": "24/1",
            "time_base": "1/24000",
            "start_pts": 0,
            "start_time": "0.000000",
            "duration_ts": 877000,
            "duration": "36.541667",
            "bit_rate": "50915139",
            "nb_frames": "877",
            "extradata_size": 105,
            "disposition": {
                "default": 1,
                "dub": 0,
                "original": 0,
                "comment": 0,
                "lyrics": 0,
                "karaoke": 0,
                "forced": 0,
                "hearing_impaired": 0,
                "visual_impaired": 0,
                "clean_effects": 0,
                "attached_pic": 0,
                "timed_thumbnails": 0,
                "captions": 0,
                "descriptions": 0,
                "metadata": 0,
                "dependent": 0,
                "still_image": 0
            },
            "tags": {
                "creation_time": "2021-08-08T05:14:42.000000Z",
                "language": "eng",
                "handler_name": "VideoHandler",
                "vendor_id": "IMVT",
                "encoder": "IMVT HEVC"
            }
        },
        {
            "index": 2,
            "codec_name": "aac",
            "codec_long_name": "AAC (Advanced Audio Coding)",
            "codec_type": "audio",
            "codec_tag_string": "mp4a",
            "codec_tag": "0x6134706d",
            "sample_fmt": "fltp",
            "sample_rate": "48000",
            "channels": 2,
            "channel_layout": "stereo",
            "bits_per_sample": 0,
            "initial_padding": 0,
            "id": "0x3",
            "r_frame_rate": "0/0",
            "avg_frame_rate": "0/0",
            "time_base": "1/48000",
            "start_pts": 0,
            "start_time": "0.000000",
            "duration_ts": 1756160,
            "duration": "36.586667",
            "bit_rate": "125367",
            "nb_frames": "1715",
            "extradata_size": 2,
            "disposition": {
                "default": 1,
                "dub": 0,
                "original": 0,
                "comment": 0,
                "lyrics": 0,
                "karaoke": 0,
                "forced": 0,
                "hearing_impaired": 0,
                "visual_impaired": 0,
                "clean_effects": 0,
                "attached_pic": 0,
                "timed_thumbnails": 0,
                "captions": 0,
                "descriptions": 0,
                "metadata": 0,
                "dependent": 0,
                "still_image": 0
            },
            "tags": {
                "creation_time": "2021-08-08T05:14:42.000000Z",
                "language": "eng",
                "handler_name": "AudioHandler",
                "vendor_id": "[0][0][0][0]"
            }
        },
        {
            "index": 3,
            "codec_type": "data",
            "codec_tag_string": "tmcd",
            "codec_tag": "0x64636d74",
            "id": "0x4",
            "r_frame_rate": "0/0",
            "avg_frame_rate": "24000/1000",
            "time_base": "1/24000",
            "start_pts": 0,
            "start_time": "0.000000",
            "duration_ts": 876000,
            "duration": "36.500000",
            "nb_frames": "1",
            "extradata_size": 33,
            "disposition": {
                "default": 1,
                "dub": 0,
                "original": 0,
                "comment": 0,
                "lyrics": 0,
                "karaoke": 0,
                "forced": 0,
                "hearing_impaired": 0,
                "visual_impaired": 0,
                "clean_effects": 0,
                "attached_pic": 0,
                "timed_thumbnails": 0,
                "captions": 0,
                "descriptions": 0,
                "metadata": 0,
                "dependent": 0,
                "still_image": 0
            },
            "tags": {
                "creation_time": "2021-08-08T05:14:42.000000Z",
                "language": "eng",
                "handler_name": "Timecode Handler",
                "reel_name": "008",
                "timecode": "06:14:42:00"
            }
        }
    ],
    "format": {
        "filename": "/Volumes/sdx.1000.j/20230807.0.0930_avLab.ILP.Shoot/zcam.a.prores/20230807.0.0930_avLab.ILP.Shoot_zcam.a.prores.0002.MOV",
        "nb_streams": 4,
        "nb_programs": 0,
        "format_name": "mov,mp4,m4a,3gp,3g2,mj2",
        "format_long_name": "QuickTime / MOV",
        "start_time": "0.000000",
        "duration": "36.586667",
        "size": "2277958854",
        "bit_rate": "498095954",
        "probe_score": 100,
        "tags": {
            "major_brand": "qt  ",
            "minor_version": "537134592",
            "compatible_brands": "qt  ",
            "creation_time": "2021-08-08T05:14:42.000000Z",
            "com.zcam.camera.prepend": "v0",
            "CameraMaker": "Z CAM",
            "CameraModel": "E2-F6",
            "com.zcam.camera.sn": "540D00A1327",
            "com.zcam.camera.fw": "0.97",
            "com.zcam.camera.movieType": "MOVIE",
            "com.zcam.camera.lut": "Rec.709",
            "com.zcam.camera.iso": "1600",
            "com.zcam.camera.shutterSpeed": "1/48",
            "com.zcam.camera.aperture": "F2.8",
            "com.zcam.camera.lensType": "EF100mm f/2.8L Macro IS USM",
            "com.zcam.camera.lensFocalLength": "100mm",
            "com.zcam.camera.focusDistance": "83mm",
            "com.zcam.camera.nd": "clear",
            "com.zcam.camera.extendedManualIso": "Off",
            "com.zcam.camera.whiteBalanceMode": "Manual",
            "com.zcam.camera.whiteBalanceKelvin": "3600K",
            "com.zcam.camera.whiteBalanceTint": "0",
            "com.zcam.camera.sharpness": "Medium",
            "com.zcam.camera.noiseReduction": "Weak",
            "com.zcam.camera.projectFps": "24",
            "com.apple.proapps.shootingRate": "24",
            "com.zcam.camera.captureVfr": "Off",
            "com.apple.proapps.cameraName": "A",
            "com.apple.proapps.reel": "008",
            "com.zcam.camera.battery": "15.9V",
            "com.zcam.camera.temperature": "38.3°C",
            "com.zcam.camera.storage": "G10ABAAA9NA",
            "com.zcam.camera.splitIndex": "0",
            "com.apple.proapps.clipID": "A008C0001_20210808061442_0001",
            "com.zcam.camera.hash": "46e2",
            "make": "Z CAM",
            "model": "E2-F6"
        }
    }
}
```

### hyperdeck json

```
{
    "streams": [
        {
            "index": 0,
            "codec_name": "h264",
            "codec_long_name": "H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10",
            "profile": "High 4:2:2",
            "codec_type": "video",
            "codec_tag_string": "avc1",
            "codec_tag": "0x31637661",
            "width": 1920,
            "height": 1080,
            "coded_width": 1920,
            "coded_height": 1080,
            "closed_captions": 0,
            "film_grain": 0,
            "has_b_frames": 0,
            "sample_aspect_ratio": "1:1",
            "display_aspect_ratio": "16:9",
            "pix_fmt": "yuv422p10le",
            "level": 41,
            "color_range": "tv",
            "color_space": "bt2020nc",
            "color_transfer": "bt709",
            "color_primaries": "bt2020",
            "field_order": "progressive",
            "refs": 1,
            "is_avc": "true",
            "nal_length_size": "4",
            "id": "0x1",
            "r_frame_rate": "24/1",
            "avg_frame_rate": "24/1",
            "time_base": "1/24",
            "start_pts": 0,
            "start_time": "0.000000",
            "duration_ts": 146976,
            "duration": "6124.000000",
            "bit_rate": "36311107",
            "bits_per_raw_sample": "10",
            "nb_frames": "146976",
            "extradata_size": 31,
            "disposition": {
                "default": 1,
                "dub": 0,
                "original": 0,
                "comment": 0,
                "lyrics": 0,
                "karaoke": 0,
                "forced": 0,
                "hearing_impaired": 0,
                "visual_impaired": 0,
                "clean_effects": 0,
                "attached_pic": 0,
                "timed_thumbnails": 0,
                "captions": 0,
                "descriptions": 0,
                "metadata": 0,
                "dependent": 0,
                "still_image": 0
            },
            "tags": {
                "creation_time": "2023-06-20T17:47:30.000000Z",
                "language": "eng",
                "handler_name": "\u0019Apple Video Media Handler",
                "vendor_id": "BMAG",
                "encoder": "H264/AVC",
                "timecode": "13:21:46:17"
            }
        },
        {
            "index": 1,
            "codec_type": "data",
            "codec_tag_string": "tmcd",
            "codec_tag": "0x64636d74",
            "id": "0x2",
            "r_frame_rate": "0/0",
            "avg_frame_rate": "24/1",
            "time_base": "1/24",
            "start_pts": 0,
            "start_time": "0.000000",
            "duration_ts": 146976,
            "duration": "6124.000000",
            "nb_frames": "1",
            "extradata_size": 18,
            "disposition": {
                "default": 1,
                "dub": 0,
                "original": 0,
                "comment": 0,
                "lyrics": 0,
                "karaoke": 0,
                "forced": 0,
                "hearing_impaired": 0,
                "visual_impaired": 0,
                "clean_effects": 0,
                "attached_pic": 0,
                "timed_thumbnails": 0,
                "captions": 0,
                "descriptions": 0,
                "metadata": 0,
                "dependent": 0,
                "still_image": 0
            },
            "tags": {
                "creation_time": "2023-06-20T17:47:30.000000Z",
                "language": "eng",
                "handler_name": "\u0017Time Code Media Handler",
                "timecode": "13:21:46:17"
            }
        },
        {
            "index": 2,
            "codec_name": "aac",
            "codec_long_name": "AAC (Advanced Audio Coding)",
            "profile": "LC",
            "codec_type": "audio",
            "codec_tag_string": "mp4a",
            "codec_tag": "0x6134706d",
            "sample_fmt": "fltp",
            "sample_rate": "48000",
            "channels": 2,
            "channel_layout": "stereo",
            "bits_per_sample": 0,
            "id": "0x3",
            "r_frame_rate": "0/0",
            "avg_frame_rate": "0/0",
            "time_base": "1/48000",
            "start_pts": 0,
            "start_time": "0.000000",
            "duration_ts": 293952000,
            "duration": "6124.000000",
            "bit_rate": "128000",
            "nb_frames": "287065",
            "extradata_size": 2,
            "disposition": {
                "default": 1,
                "dub": 0,
                "original": 0,
                "comment": 0,
                "lyrics": 0,
                "karaoke": 0,
                "forced": 0,
                "hearing_impaired": 0,
                "visual_impaired": 0,
                "clean_effects": 0,
                "attached_pic": 0,
                "timed_thumbnails": 0,
                "captions": 0,
                "descriptions": 0,
                "metadata": 0,
                "dependent": 0,
                "still_image": 0
            },
            "tags": {
                "creation_time": "2023-06-20T17:47:30.000000Z",
                "language": "eng",
                "handler_name": "\u0019Apple Sound Media Handler",
                "vendor_id": "[0][0][0][0]",
                "timecode": "13:21:46:17"
            }
        }
    ],
    "format": {
        "filename": "/Volumes/sdx.1000/_ingest/2023_06/20/20230620.0.1330_NAHSP.Storytelling.Workshop/hyper.c.h264/20230620.0.1330_NAHSP.Storytelling.Workshop_hyper.c.h264.0001.mp4",
        "nb_streams": 3,
        "nb_programs": 0,
        "format_name": "mov,mp4,m4a,3gp,3g2,mj2",
        "format_long_name": "QuickTime / MOV",
        "start_time": "0.000000",
        "duration": "6124.000000",
        "size": "27897138356",
        "bit_rate": "36443028",
        "probe_score": 100,
        "tags": {
            "major_brand": "isom",
            "minor_version": "1",
            "compatible_brands": "iso4avc1isom",
            "creation_time": "2023-06-20T17:47:30.000000Z",
            "com.apple.proapps.reel": "1",
            "com.apple.proapps.scene": "1",
            "com.apple.proapps.shot": "96",
            "com.blackmagic-design.camera.environment": "interior",
            "com.blackmagic-design.camera.dayNight": "day",
            "com.apple.proapps.cameraName": "A",
            "com.blackmagic-design.camera.dateRecorded": "20230620"
        }
    }
}
```
### amx json

``` 
{
    "streams": [
        {
            "index": 0,
            "codec_name": "h264",
            "codec_long_name": "H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10",
            "profile": "Main",
            "codec_type": "video",
            "codec_tag_string": "avc1",
            "codec_tag": "0x31637661",
            "width": 1920,
            "height": 1080,
            "coded_width": 1920,
            "coded_height": 1080,
            "closed_captions": 0,
            "film_grain": 0,
            "has_b_frames": 0,
            "sample_aspect_ratio": "1:1",
            "display_aspect_ratio": "16:9",
            "pix_fmt": "yuv420p",
            "level": 41,
            "color_range": "tv",
            "color_space": "bt709",
            "color_transfer": "bt709",
            "color_primaries": "bt709",
            "chroma_location": "left",
            "field_order": "progressive",
            "refs": 1,
            "is_avc": "true",
            "nal_length_size": "4",
            "id": "0x1",
            "r_frame_rate": "24/1",
            "avg_frame_rate": "24/1",
            "time_base": "1/24",
            "start_pts": 0,
            "start_time": "0.000000",
            "duration_ts": 27072,
            "duration": "1128.000000",
            "bit_rate": "29798917",
            "bits_per_raw_sample": "8",
            "nb_frames": "27072",
            "extradata_size": 51,
            "disposition": {
                "default": 1,
                "dub": 0,
                "original": 0,
                "comment": 0,
                "lyrics": 0,
                "karaoke": 0,
                "forced": 0,
                "hearing_impaired": 0,
                "visual_impaired": 0,
                "clean_effects": 0,
                "attached_pic": 0,
                "timed_thumbnails": 0,
                "captions": 0,
                "descriptions": 0,
                "metadata": 0,
                "dependent": 0,
                "still_image": 0
            },
            "tags": {
                "creation_time": "2023-08-04T14:59:49.000000Z",
                "language": "eng",
                "handler_name": "\u0019Apple Video Media Handler",
                "vendor_id": "BMAG",
                "encoder": "H264/AVC",
                "timecode": "10:59:49:05"
            }
        },
        {
            "index": 1,
            "codec_type": "data",
            "codec_tag_string": "tmcd",
            "codec_tag": "0x64636d74",
            "id": "0x2",
            "r_frame_rate": "0/0",
            "avg_frame_rate": "24/1",
            "time_base": "1/24",
            "start_pts": 0,
            "start_time": "0.000000",
            "duration_ts": 27072,
            "duration": "1128.000000",
            "nb_frames": "1",
            "extradata_size": 18,
            "disposition": {
                "default": 1,
                "dub": 0,
                "original": 0,
                "comment": 0,
                "lyrics": 0,
                "karaoke": 0,
                "forced": 0,
                "hearing_impaired": 0,
                "visual_impaired": 0,
                "clean_effects": 0,
                "attached_pic": 0,
                "timed_thumbnails": 0,
                "captions": 0,
                "descriptions": 0,
                "metadata": 0,
                "dependent": 0,
                "still_image": 0
            },
            "tags": {
                "creation_time": "2023-08-04T14:59:49.000000Z",
                "language": "eng",
                "handler_name": "\u0017Time Code Media Handler",
                "timecode": "10:59:49:05"
            }
        },
        {
            "index": 2,
            "codec_name": "aac",
            "codec_long_name": "AAC (Advanced Audio Coding)",
            "profile": "LC",
            "codec_type": "audio",
            "codec_tag_string": "mp4a",
            "codec_tag": "0x6134706d",
            "sample_fmt": "fltp",
            "sample_rate": "48000",
            "channels": 2,
            "channel_layout": "stereo",
            "bits_per_sample": 0,
            "initial_padding": 0,
            "id": "0x3",
            "r_frame_rate": "0/0",
            "avg_frame_rate": "0/0",
            "time_base": "1/48000",
            "start_pts": 0,
            "start_time": "0.000000",
            "duration_ts": 54144000,
            "duration": "1128.000000",
            "bit_rate": "128003",
            "nb_frames": "52877",
            "extradata_size": 2,
            "disposition": {
                "default": 1,
                "dub": 0,
                "original": 0,
                "comment": 0,
                "lyrics": 0,
                "karaoke": 0,
                "forced": 0,
                "hearing_impaired": 0,
                "visual_impaired": 0,
                "clean_effects": 0,
                "attached_pic": 0,
                "timed_thumbnails": 0,
                "captions": 0,
                "descriptions": 0,
                "metadata": 0,
                "dependent": 0,
                "still_image": 0
            },
            "tags": {
                "creation_time": "2023-08-04T14:59:49.000000Z",
                "language": "eng",
                "handler_name": "\u0019Apple Sound Media Handler",
                "vendor_id": "[0][0][0][0]",
                "timecode": "10:59:49:05"
            }
        }
    ],
    "format": {
        "filename": "/Volumes/ll_ingest_01/_ingest/08/04/20230804.1.1100_LLSUMMEROFAI.Content.Recording/amx.a.v3/20230804.1.1100_LLSUMMEROFAI.Content.Recording_amx.a.v3.0001.mp4",
        "nb_streams": 3,
        "nb_programs": 0,
        "format_name": "mov,mp4,m4a,3gp,3g2,mj2",
        "format_long_name": "QuickTime / MOV",
        "start_time": "0.000000",
        "duration": "1128.000000",
        "size": "4220296280",
        "bit_rate": "29931179",
        "probe_score": 100,
        "tags": {
            "major_brand": "isom",
            "minor_version": "1",
            "compatible_brands": "iso4avc1isom",
            "creation_time": "2023-08-04T14:59:49.000000Z",
            "com.blackmagic-design.camera.dateRecorded": "2023:08:04",
            "com.blackmagic-design.camera.timelineID": "c766d96d",
            "com.apple.proapps.clipID": "amx.01 CAM 3",
            "com.apple.proapps.cameraName": "3",
            "com.blackmagic-design.camera.uuid": "877CB632F4D5424786A61BF2916FBF1B-3"
        }
    }
}
```
