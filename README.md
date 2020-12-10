最好在系统终端应用中执行以下命令，在 IDE 工具中可能会内存不足

改了 node-media-server 中 http 参数后 记得改 index.html 里面 m3u8 链接，默认是 0.0.0.0 ，只能本机预览，如果希望局域网内可以预览，可以把 m3u8 链接的 host 改为本机 ip

npm i

```
 "dependencies": {
    "@ffmpeg-installer/ffmpeg": "^1.0.20",
    "fluent-ffmpeg": "^2.1.2",
    "local-web-server": "^4.2.1",
    "node-media-server": "^2.2.2"
  }
```

node-media-server

启动流媒体服务器

```
npm run media:server
```

启动 Mac FaceTime 采集视频，推流到流媒体服务器

```
npm run ffmpeg
```

启动 html 服务器，拉取流播放

```
npm run html:server
```

node-media-server 控制台页面

http://0.0.0.0:9000/admin/
