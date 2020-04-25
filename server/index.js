import express from 'express';
import path from 'path';
import ssr from '../ssr/index';

const app = express();
const port = 3200;

app.listen(port, ()=>{
    console.log(`express server started at ${port}`);
})

const _splitChar = __dirname.indexOf("/") !=-1 ? "/": "\\";
const _assetsPathsArr = __dirname.split(_splitChar);
_assetsPathsArr.pop();
const assetPath = _assetsPathsArr.join("/");
const _media = assetPath.concat('/media')
const _assets = assetPath.concat('/assets')
const _options = {
    setHeaders: (res, path, stat)=>{
        if(path.indexOf('media') )
        {
            res.setHeader('Cache-Control','max-age=604800');
            res.setHeader('x-ssr-stamp',Date());
        }
    }
}

app.use('/assets', express.static(_assets,_options));
app.use('/media', express.static(_media,_options));

app.get("/_info", (req,res,next)=>{
    const _info = {
        req: req.url,
        status: 'healthy'
    }
    res.send(JSON.stringify(_info));
    next();
});


// server rendered home page
app.get('/', (req, res) => {
    const { _html}  = ssr()
    res.setHeader('Cache-Control', 'assets, max-age=604800');
    res.setHeader('x-powered-by', 'ssr demo server')
    res.send(_html);
  });




