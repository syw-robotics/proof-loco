(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const $v="modulepreload",jv=function(i,e){return new URL(i,e).href},ph={},Xv=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let h=function(m){return Promise.all(m.map(p=>Promise.resolve(p).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const l=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),f=c?.nonce||c?.getAttribute("nonce");r=h(t.map(m=>{if(m=jv(m,n),m in ph)return;ph[m]=!0;const p=m.endsWith(".css"),g=p?'[rel="stylesheet"]':"";if(n)for(let b=l.length-1;b>=0;b--){const T=l[b];if(T.href===m&&(!p||T.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${g}`))return;const v=document.createElement("link");if(v.rel=p?"stylesheet":$v,p||(v.as="script"),v.crossOrigin="",v.href=m,f&&v.setAttribute("nonce",f),document.head.appendChild(v),p)return new Promise((b,T)=>{v.addEventListener("load",b),v.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${m}`)))})}))}function a(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return r.then(l=>{for(const c of l||[])c.status==="rejected"&&a(c.reason);return e().catch(a)})};var qv=(async function(i={}){var e,t=i,n=typeof window=="object",r=typeof WorkerGlobalScope<"u",a=typeof process=="object"&&process.versions?.node&&process.type!="renderer",l=!n&&!a&&!r;if(a){const{createRequire:s}=await Xv(async()=>{const{createRequire:o}=await Promise.resolve().then(()=>AM);return{createRequire:o}},[],import.meta.url);var c=s(import.meta.url)}var f="./this.program",h=(s,o)=>{throw o},m=import.meta.url,p="";function g(s){return t.locateFile?t.locateFile(s,p):p+s}var v,b;if(a){if(!(typeof process=="object"&&process.versions?.node&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var T=process.versions.node,x=T.split(".").slice(0,3);if(x=x[0]*1e4+x[1]*100+x[2].split("-")[0]*1,x<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+T+")");var _=c("fs");m.startsWith("file:")&&(p=c("path").dirname(c("url").fileURLToPath(m))+"/"),b=o=>{o=G(o)?new URL(o):o;var u=_.readFileSync(o);return S(Buffer.isBuffer(u)),u},v=async(o,u=!0)=>{o=G(o)?new URL(o):o;var d=_.readFileSync(o,u?void 0:"utf8");return S(u?Buffer.isBuffer(d):typeof d=="string"),d},process.argv.length>1&&(f=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),h=(o,u)=>{throw process.exitCode=o,u}}else if(l){if(typeof process=="object"&&process.versions?.node&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(n||r){try{p=new URL(".",m).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");r&&(b=s=>{var o=new XMLHttpRequest;return o.open("GET",s,!1),o.responseType="arraybuffer",o.send(null),new Uint8Array(o.response)}),v=async s=>{if(G(s))return new Promise((u,d)=>{var y=new XMLHttpRequest;y.open("GET",s,!0),y.responseType="arraybuffer",y.onload=()=>{if(y.status==200||y.status==0&&y.response){u(y.response);return}d(y.status)},y.onerror=d,y.send(null)});var o=await fetch(s,{credentials:"same-origin"});if(o.ok)return o.arrayBuffer();throw new Error(o.status+" : "+o.url)}}else throw new Error("environment detection error");var U=console.log.bind(console),I=console.error.bind(console);S(!l,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var F;typeof WebAssembly!="object"&&I("no native wasm support detected");var V=!1;function S(s,o){s||ne("Assertion failed"+(o?": "+o:""))}var G=s=>s.startsWith("file://");function Y(){var s=ul();S((s&3)==0),s==0&&(s+=4),_e[s>>2]=34821223,_e[s+4>>2]=2310721022,_e[0]=1668509029}function N(){if(!V){var s=ul();s==0&&(s+=4);var o=_e[s>>2],u=_e[s+4>>2];(o!=34821223||u!=2310721022)&&ne(`Stack overflow! Stack cookie has been overwritten at ${Be(s)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${Be(u)} ${Be(o)}`),_e[0]!=1668509029&&ne("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class A extends Error{}class O extends A{}class K extends A{constructor(o){super(o),this.excPtr=o;const u=Qu(o);this.name=u[0],this.message=u[1]}}(()=>{var s=new Int16Array(1),o=new Int8Array(s.buffer);if(s[0]=25459,o[0]!==115||o[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function oe(s){Object.getOwnPropertyDescriptor(t,s)||Object.defineProperty(t,s,{configurable:!0,set(){ne(`Attempt to set \`Module.${s}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function Z(s){return()=>S(!1,`call to '${s}' via reference taken before Wasm module initialization`)}function $(s){Object.getOwnPropertyDescriptor(t,s)&&ne(`\`Module.${s}\` was supplied but \`${s}\` not included in INCOMING_MODULE_JS_API`)}function ee(s){return s==="FS_createPath"||s==="FS_createDataFile"||s==="FS_createPreloadedFile"||s==="FS_unlink"||s==="addRunDependency"||s==="FS_createLazyFile"||s==="FS_createDevice"||s==="removeRunDependency"}function pe(s,o){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,s)&&Object.defineProperty(globalThis,s,{configurable:!0,get(){o()}})}function se(s,o){pe(s,()=>{ze(`\`${s}\` is not longer defined by emscripten. ${o}`)})}se("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),se("asm","Please use wasmExports instead");function Ee(s){pe(s,()=>{var o=`\`${s}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,u=s;u.startsWith("_")||(u="$"+s),o+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${u}')`,ee(s)&&(o+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),ze(o)}),De(s)}function De(s){Object.getOwnPropertyDescriptor(t,s)||Object.defineProperty(t,s,{configurable:!0,get(){var o=`'${s}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;ee(s)&&(o+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),ne(o)}})}var je,at,Et,lt,Qe,de,ye,ue,_e,Ae,dt,Nt,W,bt=!1;function rt(){var s=Et.buffer;lt=new Int8Array(s),de=new Int16Array(s),Qe=new Uint8Array(s),ye=new Uint16Array(s),ue=new Int32Array(s),_e=new Uint32Array(s),Ae=new Float32Array(s),dt=new Float64Array(s),Nt=new BigInt64Array(s),W=new BigUint64Array(s)}S(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function et(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)Pe(t.preRun.shift());oe("preRun"),Ye(X)}function Ge(){S(!bt),bt=!0,N(),!t.noFSInit&&!M.initialized&&M.init(),ur.__wasm_call_ctors(),M.ignorePermissions=!1}function zt(){if(N(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)ut(t.postRun.shift());oe("postRun"),Ye(Ue)}var He=0,ot=null,Ht={},St=null;function k(s){He++,t.monitorRunDependencies?.(He),s?(S(!Ht[s]),Ht[s]=1,St===null&&typeof setInterval<"u"&&(St=setInterval(()=>{if(V){clearInterval(St),St=null;return}var o=!1;for(var u in Ht)o||(o=!0,I("still waiting on run dependencies:")),I(`dependency: ${u}`);o&&I("(end of list)")},1e4))):I("warning: run dependency added without ID")}function R(s){if(He--,t.monitorRunDependencies?.(He),s?(S(Ht[s]),delete Ht[s]):I("warning: run dependency removed without ID"),He==0&&(St!==null&&(clearInterval(St),St=null),ot)){var o=ot;ot=null,o()}}function ne(s){t.onAbort?.(s),s="Aborted("+s+")",I(s),V=!0;var o=new WebAssembly.RuntimeError(s);throw at?.(o),o}function fe(s,o){return(...u)=>{S(bt,`native function \`${s}\` called before runtime initialization`);var d=ur[s];return S(d,`exported native function \`${s}\` not found`),S(u.length<=o,`native function \`${s}\` called with ${u.length} args but expects ${o}`),d(...u)}}var we;function me(){return t.locateFile?g("mujoco.wasm"):new URL(""+new URL("mujoco-Mp9KyG2b.wasm",import.meta.url).href,import.meta.url).href}function $e(s){if(s==we&&F)return new Uint8Array(F);if(b)return b(s);throw"both async and sync fetching of the wasm failed"}async function Ie(s){if(!F)try{var o=await v(s);return new Uint8Array(o)}catch{}return $e(s)}async function Xe(s,o){try{var u=await Ie(s),d=await WebAssembly.instantiate(u,o);return d}catch(y){I(`failed to asynchronously prepare wasm: ${y}`),G(we)&&I(`warning: Loading from a file URI (${we}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),ne(y)}}async function qe(s,o,u){if(!s&&typeof WebAssembly.instantiateStreaming=="function"&&!G(o)&&!a)try{var d=fetch(o,{credentials:"same-origin"}),y=await WebAssembly.instantiateStreaming(d,u);return y}catch(E){I(`wasm streaming compile failed: ${E}`),I("falling back to ArrayBuffer instantiation")}return Xe(o,u)}function Re(){return{env:hh,wasi_snapshot_preview1:hh}}async function Oe(){function s(C,D){return ur=C.exports,Et=ur.memory,S(Et,"memory not found in wasm exports"),rt(),$r=ur.__indirect_function_table,S($r,"table not found in wasm exports"),Ym(ur),R("wasm-instantiate"),ur}k("wasm-instantiate");var o=t;function u(C){return S(t===o,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),o=null,s(C.instance)}var d=Re();if(t.instantiateWasm)return new Promise((C,D)=>{try{t.instantiateWasm(d,(B,re)=>{C(s(B,re))})}catch(B){I(`Module.instantiateWasm callback failed with error: ${B}`),D(B)}});we??=me();var y=await qe(F,we,d),E=u(y);return E}class tt{name="ExitStatus";constructor(o){this.message=`Program terminated with exit(${o})`,this.status=o}}var Ye=s=>{for(;s.length>0;)s.shift()(t)},Ue=[],ut=s=>Ue.push(s),X=[],Pe=s=>X.push(s),Fe=!0,Be=s=>(S(typeof s=="number"),s>>>=0,"0x"+s.toString(16).padStart(8,"0")),J=s=>sh(s),j=()=>oh(),ze=s=>{ze.shown||={},ze.shown[s]||(ze.shown[s]=1,a&&(s="warning: "+s),I(s))},st=typeof TextDecoder<"u"?new TextDecoder:void 0,Dt=(s,o=0,u=NaN)=>{for(var d=o+u,y=o;s[y]&&!(y>=d);)++y;if(y-o>16&&s.buffer&&st)return st.decode(s.subarray(o,y));for(var E="";o<y;){var C=s[o++];if(!(C&128)){E+=String.fromCharCode(C);continue}var D=s[o++]&63;if((C&224)==192){E+=String.fromCharCode((C&31)<<6|D);continue}var B=s[o++]&63;if((C&240)==224?C=(C&15)<<12|D<<6|B:((C&248)!=240&&ze("Invalid UTF-8 leading byte "+Be(C)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),C=(C&7)<<18|D<<12|B<<6|s[o++]&63),C<65536)E+=String.fromCharCode(C);else{var re=C-65536;E+=String.fromCharCode(55296|re>>10,56320|re&1023)}}return E},pt=(s,o)=>(S(typeof s=="number",`UTF8ToString expects a number (got ${typeof s})`),s?Dt(Qe,s,o):""),In=(s,o,u,d)=>ne(`Assertion failed: ${pt(s)}, at: `+[o?pt(o):"unknown filename",u,d?pt(d):"unknown function"]),nn=[],di=0,jn=s=>{var o=new Xn(s);return o.get_caught()||(o.set_caught(!0),di--),o.set_rethrown(!1),nn.push(o),La(s),uh(s)},Ni=()=>{if(!nn.length)return 0;var s=nn[nn.length-1];return La(s.excPtr),s.excPtr},Sn=0,ir=()=>{Ce(0,0),S(nn.length>0);var s=nn.pop();hl(s.excPtr),Sn=0};class Xn{constructor(o){this.excPtr=o,this.ptr=o-24}set_type(o){_e[this.ptr+4>>2]=o}get_type(){return _e[this.ptr+4>>2]}set_destructor(o){_e[this.ptr+8>>2]=o}get_destructor(){return _e[this.ptr+8>>2]}set_caught(o){o=o?1:0,lt[this.ptr+12]=o}get_caught(){return lt[this.ptr+12]!=0}set_rethrown(o){o=o?1:0,lt[this.ptr+13]=o}get_rethrown(){return lt[this.ptr+13]!=0}init(o,u){this.set_adjusted_ptr(0),this.set_type(o),this.set_destructor(u)}set_adjusted_ptr(o){_e[this.ptr+16>>2]=o}get_adjusted_ptr(){return _e[this.ptr+16>>2]}}var pi=s=>ih(s),ni=s=>{var o=Sn?.excPtr;if(!o)return pi(0),0;var u=new Xn(o);u.set_adjusted_ptr(o);var d=u.get_type();if(!d)return pi(0),o;for(var y of s){if(y===0||y===d)break;var E=u.ptr+16;if(ch(y,d,E))return pi(y),o}return pi(d),o},rr=()=>ni([]),Ur=s=>ni([s]),Cs=(s,o)=>ni([s,o]),Oi=()=>{var s=nn.pop();s||ne("no exception to throw");var o=s.excPtr;throw s.get_rethrown()||(nn.push(s),s.set_rethrown(!0),s.set_caught(!1),di++),Sn=new K(o),Sn},Ps=s=>{if(s){var o=new Xn(s);nn.push(o),o.set_rethrown(!0),Oi()}},sr=(s,o,u)=>{var d=new Xn(s);throw d.init(o,u),Sn=new K(s),di++,Sn},ki=()=>di,Ds=s=>{throw Sn||(Sn=new K(s)),Sn},L={isAbs:s=>s.charAt(0)==="/",splitPath:s=>{var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return o.exec(s).slice(1)},normalizeArray:(s,o)=>{for(var u=0,d=s.length-1;d>=0;d--){var y=s[d];y==="."?s.splice(d,1):y===".."?(s.splice(d,1),u++):u&&(s.splice(d,1),u--)}if(o)for(;u;u--)s.unshift("..");return s},normalize:s=>{var o=L.isAbs(s),u=s.slice(-1)==="/";return s=L.normalizeArray(s.split("/").filter(d=>!!d),!o).join("/"),!s&&!o&&(s="."),s&&u&&(s+="/"),(o?"/":"")+s},dirname:s=>{var o=L.splitPath(s),u=o[0],d=o[1];return!u&&!d?".":(d&&(d=d.slice(0,-1)),u+d)},basename:s=>s&&s.match(/([^\/]+|\/)\/*$/)[1],join:(...s)=>L.normalize(s.join("/")),join2:(s,o)=>L.normalize(s+"/"+o)},te=()=>{if(a){var s=c("crypto");return o=>s.randomFillSync(o)}return o=>crypto.getRandomValues(o)},he=s=>{(he=te())(s)},ce={resolve:(...s)=>{for(var o="",u=!1,d=s.length-1;d>=-1&&!u;d--){var y=d>=0?s[d]:M.cwd();if(typeof y!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!y)return"";o=y+"/"+o,u=L.isAbs(y)}return o=L.normalizeArray(o.split("/").filter(E=>!!E),!u).join("/"),(u?"/":"")+o||"."},relative:(s,o)=>{s=ce.resolve(s).slice(1),o=ce.resolve(o).slice(1);function u(re){for(var ae=0;ae<re.length&&re[ae]==="";ae++);for(var ve=re.length-1;ve>=0&&re[ve]==="";ve--);return ae>ve?[]:re.slice(ae,ve-ae+1)}for(var d=u(s.split("/")),y=u(o.split("/")),E=Math.min(d.length,y.length),C=E,D=0;D<E;D++)if(d[D]!==y[D]){C=D;break}for(var B=[],D=C;D<d.length;D++)B.push("..");return B=B.concat(y.slice(C)),B.join("/")}},ie=[],Se=s=>{for(var o=0,u=0;u<s.length;++u){var d=s.charCodeAt(u);d<=127?o++:d<=2047?o+=2:d>=55296&&d<=57343?(o+=4,++u):o+=3}return o},Ne=(s,o,u,d)=>{if(S(typeof s=="string",`stringToUTF8Array expects a string (got ${typeof s})`),!(d>0))return 0;for(var y=u,E=u+d-1,C=0;C<s.length;++C){var D=s.codePointAt(C);if(D<=127){if(u>=E)break;o[u++]=D}else if(D<=2047){if(u+1>=E)break;o[u++]=192|D>>6,o[u++]=128|D&63}else if(D<=65535){if(u+2>=E)break;o[u++]=224|D>>12,o[u++]=128|D>>6&63,o[u++]=128|D&63}else{if(u+3>=E)break;D>1114111&&ze("Invalid Unicode code point "+Be(D)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),o[u++]=240|D>>18,o[u++]=128|D>>12&63,o[u++]=128|D>>6&63,o[u++]=128|D&63,C++}}return o[u]=0,u-y},We=(s,o,u)=>{var d=Se(s)+1,y=new Array(d),E=Ne(s,y,0,y.length);return y.length=E,y},Ve=()=>{if(!ie.length){var s=null;if(a){var o=256,u=Buffer.alloc(o),d=0,y=process.stdin.fd;try{d=_.readSync(y,u,0,o)}catch(E){if(E.toString().includes("EOF"))d=0;else throw E}d>0&&(s=u.slice(0,d).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(s=window.prompt("Input: "),s!==null&&(s+=`
`));if(!s)return null;ie=We(s)}return ie.shift()},Ke={ttys:[],init(){},shutdown(){},register(s,o){Ke.ttys[s]={input:[],output:[],ops:o},M.registerDevice(s,Ke.stream_ops)},stream_ops:{open(s){var o=Ke.ttys[s.node.rdev];if(!o)throw new M.ErrnoError(43);s.tty=o,s.seekable=!1},close(s){s.tty.ops.fsync(s.tty)},fsync(s){s.tty.ops.fsync(s.tty)},read(s,o,u,d,y){if(!s.tty||!s.tty.ops.get_char)throw new M.ErrnoError(60);for(var E=0,C=0;C<d;C++){var D;try{D=s.tty.ops.get_char(s.tty)}catch{throw new M.ErrnoError(29)}if(D===void 0&&E===0)throw new M.ErrnoError(6);if(D==null)break;E++,o[u+C]=D}return E&&(s.node.atime=Date.now()),E},write(s,o,u,d,y){if(!s.tty||!s.tty.ops.put_char)throw new M.ErrnoError(60);try{for(var E=0;E<d;E++)s.tty.ops.put_char(s.tty,o[u+E])}catch{throw new M.ErrnoError(29)}return d&&(s.node.mtime=s.node.ctime=Date.now()),E}},default_tty_ops:{get_char(s){return Ve()},put_char(s,o){o===null||o===10?(U(Dt(s.output)),s.output=[]):o!=0&&s.output.push(o)},fsync(s){s.output?.length>0&&(U(Dt(s.output)),s.output=[])},ioctl_tcgets(s){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(s,o,u){return 0},ioctl_tiocgwinsz(s){return[24,80]}},default_tty1_ops:{put_char(s,o){o===null||o===10?(I(Dt(s.output)),s.output=[]):o!=0&&s.output.push(o)},fsync(s){s.output?.length>0&&(I(Dt(s.output)),s.output=[])}}},nt=s=>{ne("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},Me={ops_table:null,mount(s){return Me.createNode(null,"/",16895,0)},createNode(s,o,u,d){if(M.isBlkdev(u)||M.isFIFO(u))throw new M.ErrnoError(63);Me.ops_table||={dir:{node:{getattr:Me.node_ops.getattr,setattr:Me.node_ops.setattr,lookup:Me.node_ops.lookup,mknod:Me.node_ops.mknod,rename:Me.node_ops.rename,unlink:Me.node_ops.unlink,rmdir:Me.node_ops.rmdir,readdir:Me.node_ops.readdir,symlink:Me.node_ops.symlink},stream:{llseek:Me.stream_ops.llseek}},file:{node:{getattr:Me.node_ops.getattr,setattr:Me.node_ops.setattr},stream:{llseek:Me.stream_ops.llseek,read:Me.stream_ops.read,write:Me.stream_ops.write,mmap:Me.stream_ops.mmap,msync:Me.stream_ops.msync}},link:{node:{getattr:Me.node_ops.getattr,setattr:Me.node_ops.setattr,readlink:Me.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Me.node_ops.getattr,setattr:Me.node_ops.setattr},stream:M.chrdev_stream_ops}};var y=M.createNode(s,o,u,d);return M.isDir(y.mode)?(y.node_ops=Me.ops_table.dir.node,y.stream_ops=Me.ops_table.dir.stream,y.contents={}):M.isFile(y.mode)?(y.node_ops=Me.ops_table.file.node,y.stream_ops=Me.ops_table.file.stream,y.usedBytes=0,y.contents=null):M.isLink(y.mode)?(y.node_ops=Me.ops_table.link.node,y.stream_ops=Me.ops_table.link.stream):M.isChrdev(y.mode)&&(y.node_ops=Me.ops_table.chrdev.node,y.stream_ops=Me.ops_table.chrdev.stream),y.atime=y.mtime=y.ctime=Date.now(),s&&(s.contents[o]=y,s.atime=s.mtime=s.ctime=y.atime),y},getFileDataAsTypedArray(s){return s.contents?s.contents.subarray?s.contents.subarray(0,s.usedBytes):new Uint8Array(s.contents):new Uint8Array(0)},expandFileStorage(s,o){var u=s.contents?s.contents.length:0;if(!(u>=o)){var d=1024*1024;o=Math.max(o,u*(u<d?2:1.125)>>>0),u!=0&&(o=Math.max(o,256));var y=s.contents;s.contents=new Uint8Array(o),s.usedBytes>0&&s.contents.set(y.subarray(0,s.usedBytes),0)}},resizeFileStorage(s,o){if(s.usedBytes!=o)if(o==0)s.contents=null,s.usedBytes=0;else{var u=s.contents;s.contents=new Uint8Array(o),u&&s.contents.set(u.subarray(0,Math.min(o,s.usedBytes))),s.usedBytes=o}},node_ops:{getattr(s){var o={};return o.dev=M.isChrdev(s.mode)?s.id:1,o.ino=s.id,o.mode=s.mode,o.nlink=1,o.uid=0,o.gid=0,o.rdev=s.rdev,M.isDir(s.mode)?o.size=4096:M.isFile(s.mode)?o.size=s.usedBytes:M.isLink(s.mode)?o.size=s.link.length:o.size=0,o.atime=new Date(s.atime),o.mtime=new Date(s.mtime),o.ctime=new Date(s.ctime),o.blksize=4096,o.blocks=Math.ceil(o.size/o.blksize),o},setattr(s,o){for(const u of["mode","atime","mtime","ctime"])o[u]!=null&&(s[u]=o[u]);o.size!==void 0&&Me.resizeFileStorage(s,o.size)},lookup(s,o){throw new M.ErrnoError(44)},mknod(s,o,u,d){return Me.createNode(s,o,u,d)},rename(s,o,u){var d;try{d=M.lookupNode(o,u)}catch{}if(d){if(M.isDir(s.mode))for(var y in d.contents)throw new M.ErrnoError(55);M.hashRemoveNode(d)}delete s.parent.contents[s.name],o.contents[u]=s,s.name=u,o.ctime=o.mtime=s.parent.ctime=s.parent.mtime=Date.now()},unlink(s,o){delete s.contents[o],s.ctime=s.mtime=Date.now()},rmdir(s,o){var u=M.lookupNode(s,o);for(var d in u.contents)throw new M.ErrnoError(55);delete s.contents[o],s.ctime=s.mtime=Date.now()},readdir(s){return[".","..",...Object.keys(s.contents)]},symlink(s,o,u){var d=Me.createNode(s,o,41471,0);return d.link=u,d},readlink(s){if(!M.isLink(s.mode))throw new M.ErrnoError(28);return s.link}},stream_ops:{read(s,o,u,d,y){var E=s.node.contents;if(y>=s.node.usedBytes)return 0;var C=Math.min(s.node.usedBytes-y,d);if(S(C>=0),C>8&&E.subarray)o.set(E.subarray(y,y+C),u);else for(var D=0;D<C;D++)o[u+D]=E[y+D];return C},write(s,o,u,d,y,E){if(S(!(o instanceof ArrayBuffer)),o.buffer===lt.buffer&&(E=!1),!d)return 0;var C=s.node;if(C.mtime=C.ctime=Date.now(),o.subarray&&(!C.contents||C.contents.subarray)){if(E)return S(y===0,"canOwn must imply no weird position inside the file"),C.contents=o.subarray(u,u+d),C.usedBytes=d,d;if(C.usedBytes===0&&y===0)return C.contents=o.slice(u,u+d),C.usedBytes=d,d;if(y+d<=C.usedBytes)return C.contents.set(o.subarray(u,u+d),y),d}if(Me.expandFileStorage(C,y+d),C.contents.subarray&&o.subarray)C.contents.set(o.subarray(u,u+d),y);else for(var D=0;D<d;D++)C.contents[y+D]=o[u+D];return C.usedBytes=Math.max(C.usedBytes,y+d),d},llseek(s,o,u){var d=o;if(u===1?d+=s.position:u===2&&M.isFile(s.node.mode)&&(d+=s.node.usedBytes),d<0)throw new M.ErrnoError(28);return d},mmap(s,o,u,d,y){if(!M.isFile(s.node.mode))throw new M.ErrnoError(43);var E,C,D=s.node.contents;if(!(y&2)&&D&&D.buffer===lt.buffer)C=!1,E=D.byteOffset;else{if(C=!0,E=nt(),!E)throw new M.ErrnoError(48);D&&((u>0||u+o<D.length)&&(D.subarray?D=D.subarray(u,u+o):D=Array.prototype.slice.call(D,u,u+o)),lt.set(D,E))}return{ptr:E,allocated:C}},msync(s,o,u,d,y){return Me.stream_ops.write(s,o,0,d,u,!1),0}}},vt=async s=>{var o=await v(s);return S(o,`Loading data file "${s}" failed (no arrayBuffer).`),new Uint8Array(o)},Rt=(...s)=>M.createDataFile(...s),Kt=s=>{for(var o=s;;){if(!Ht[s])return s;s=o+Math.random()}},Bt=[],Ct=(s,o,u,d)=>{typeof Browser<"u"&&Browser.init();var y=!1;return Bt.forEach(E=>{y||E.canHandle(o)&&(E.handle(s,o,u,d),y=!0)}),y},Ze=(s,o,u,d,y,E,C,D,B,re)=>{var ae=o?ce.resolve(L.join2(s,o)):s,ve=Kt(`cp ${ae}`);function xe(ge){function be(it){re?.(),D||Rt(s,o,it,d,y,B),E?.(),R(ve)}Ct(ge,ae,be,()=>{C?.(),R(ve)})||be(ge)}k(ve),typeof u=="string"?vt(u).then(xe,C):xe(u)},Xt=s=>{var o={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},u=o[s];if(typeof u>"u")throw new Error(`Unknown file open mode: ${s}`);return u},Mt=(s,o)=>{var u=0;return s&&(u|=365),o&&(u|=146),u},hn=s=>pt(nh(s)),ii={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},M={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{name="ErrnoError";constructor(s){super(bt?hn(s):""),this.errno=s;for(var o in ii)if(ii[o]===s){this.code=o;break}}},FSStream:class{shared={};get object(){return this.node}set object(s){this.node=s}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(s){this.shared.flags=s}get position(){return this.shared.position}set position(s){this.shared.position=s}},FSNode:class{node_ops={};stream_ops={};readMode=365;writeMode=146;mounted=null;constructor(s,o,u,d){s||(s=this),this.parent=s,this.mount=s.mount,this.id=M.nextInode++,this.name=o,this.mode=u,this.rdev=d,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(s){s?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(s){s?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return M.isDir(this.mode)}get isDevice(){return M.isChrdev(this.mode)}},lookupPath(s,o={}){if(!s)throw new M.ErrnoError(44);o.follow_mount??=!0,L.isAbs(s)||(s=M.cwd()+"/"+s);e:for(var u=0;u<40;u++){for(var d=s.split("/").filter(re=>!!re),y=M.root,E="/",C=0;C<d.length;C++){var D=C===d.length-1;if(D&&o.parent)break;if(d[C]!=="."){if(d[C]===".."){if(E=L.dirname(E),M.isRoot(y)){s=E+"/"+d.slice(C+1).join("/");continue e}else y=y.parent;continue}E=L.join2(E,d[C]);try{y=M.lookupNode(y,d[C])}catch(re){if(re?.errno===44&&D&&o.noent_okay)return{path:E};throw re}if(M.isMountpoint(y)&&(!D||o.follow_mount)&&(y=y.mounted.root),M.isLink(y.mode)&&(!D||o.follow)){if(!y.node_ops.readlink)throw new M.ErrnoError(52);var B=y.node_ops.readlink(y);L.isAbs(B)||(B=L.dirname(E)+"/"+B),s=B+"/"+d.slice(C+1).join("/");continue e}}}return{path:E,node:y}}throw new M.ErrnoError(32)},getPath(s){for(var o;;){if(M.isRoot(s)){var u=s.mount.mountpoint;return o?u[u.length-1]!=="/"?`${u}/${o}`:u+o:u}o=o?`${s.name}/${o}`:s.name,s=s.parent}},hashName(s,o){for(var u=0,d=0;d<o.length;d++)u=(u<<5)-u+o.charCodeAt(d)|0;return(s+u>>>0)%M.nameTable.length},hashAddNode(s){var o=M.hashName(s.parent.id,s.name);s.name_next=M.nameTable[o],M.nameTable[o]=s},hashRemoveNode(s){var o=M.hashName(s.parent.id,s.name);if(M.nameTable[o]===s)M.nameTable[o]=s.name_next;else for(var u=M.nameTable[o];u;){if(u.name_next===s){u.name_next=s.name_next;break}u=u.name_next}},lookupNode(s,o){var u=M.mayLookup(s);if(u)throw new M.ErrnoError(u);for(var d=M.hashName(s.id,o),y=M.nameTable[d];y;y=y.name_next){var E=y.name;if(y.parent.id===s.id&&E===o)return y}return M.lookup(s,o)},createNode(s,o,u,d){S(typeof s=="object");var y=new M.FSNode(s,o,u,d);return M.hashAddNode(y),y},destroyNode(s){M.hashRemoveNode(s)},isRoot(s){return s===s.parent},isMountpoint(s){return!!s.mounted},isFile(s){return(s&61440)===32768},isDir(s){return(s&61440)===16384},isLink(s){return(s&61440)===40960},isChrdev(s){return(s&61440)===8192},isBlkdev(s){return(s&61440)===24576},isFIFO(s){return(s&61440)===4096},isSocket(s){return(s&49152)===49152},flagsToPermissionString(s){var o=["r","w","rw"][s&3];return s&512&&(o+="w"),o},nodePermissions(s,o){return M.ignorePermissions?0:o.includes("r")&&!(s.mode&292)||o.includes("w")&&!(s.mode&146)||o.includes("x")&&!(s.mode&73)?2:0},mayLookup(s){if(!M.isDir(s.mode))return 54;var o=M.nodePermissions(s,"x");return o||(s.node_ops.lookup?0:2)},mayCreate(s,o){if(!M.isDir(s.mode))return 54;try{var u=M.lookupNode(s,o);return 20}catch{}return M.nodePermissions(s,"wx")},mayDelete(s,o,u){var d;try{d=M.lookupNode(s,o)}catch(E){return E.errno}var y=M.nodePermissions(s,"wx");if(y)return y;if(u){if(!M.isDir(d.mode))return 54;if(M.isRoot(d)||M.getPath(d)===M.cwd())return 10}else if(M.isDir(d.mode))return 31;return 0},mayOpen(s,o){return s?M.isLink(s.mode)?32:M.isDir(s.mode)&&(M.flagsToPermissionString(o)!=="r"||o&576)?31:M.nodePermissions(s,M.flagsToPermissionString(o)):44},checkOpExists(s,o){if(!s)throw new M.ErrnoError(o);return s},MAX_OPEN_FDS:4096,nextfd(){for(var s=0;s<=M.MAX_OPEN_FDS;s++)if(!M.streams[s])return s;throw new M.ErrnoError(33)},getStreamChecked(s){var o=M.getStream(s);if(!o)throw new M.ErrnoError(8);return o},getStream:s=>M.streams[s],createStream(s,o=-1){return S(o>=-1),s=Object.assign(new M.FSStream,s),o==-1&&(o=M.nextfd()),s.fd=o,M.streams[o]=s,s},closeStream(s){M.streams[s]=null},dupStream(s,o=-1){var u=M.createStream(s,o);return u.stream_ops?.dup?.(u),u},doSetAttr(s,o,u){var d=s?.stream_ops.setattr,y=d?s:o;d??=o.node_ops.setattr,M.checkOpExists(d,63),d(y,u)},chrdev_stream_ops:{open(s){var o=M.getDevice(s.node.rdev);s.stream_ops=o.stream_ops,s.stream_ops.open?.(s)},llseek(){throw new M.ErrnoError(70)}},major:s=>s>>8,minor:s=>s&255,makedev:(s,o)=>s<<8|o,registerDevice(s,o){M.devices[s]={stream_ops:o}},getDevice:s=>M.devices[s],getMounts(s){for(var o=[],u=[s];u.length;){var d=u.pop();o.push(d),u.push(...d.mounts)}return o},syncfs(s,o){typeof s=="function"&&(o=s,s=!1),M.syncFSRequests++,M.syncFSRequests>1&&I(`warning: ${M.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var u=M.getMounts(M.root.mount),d=0;function y(C){return S(M.syncFSRequests>0),M.syncFSRequests--,o(C)}function E(C){if(C)return E.errored?void 0:(E.errored=!0,y(C));++d>=u.length&&y(null)}u.forEach(C=>{if(!C.type.syncfs)return E(null);C.type.syncfs(C,s,E)})},mount(s,o,u){if(typeof s=="string")throw s;var d=u==="/",y=!u,E;if(d&&M.root)throw new M.ErrnoError(10);if(!d&&!y){var C=M.lookupPath(u,{follow_mount:!1});if(u=C.path,E=C.node,M.isMountpoint(E))throw new M.ErrnoError(10);if(!M.isDir(E.mode))throw new M.ErrnoError(54)}var D={type:s,opts:o,mountpoint:u,mounts:[]},B=s.mount(D);return B.mount=D,D.root=B,d?M.root=B:E&&(E.mounted=D,E.mount&&E.mount.mounts.push(D)),B},unmount(s){var o=M.lookupPath(s,{follow_mount:!1});if(!M.isMountpoint(o.node))throw new M.ErrnoError(28);var u=o.node,d=u.mounted,y=M.getMounts(d);Object.keys(M.nameTable).forEach(C=>{for(var D=M.nameTable[C];D;){var B=D.name_next;y.includes(D.mount)&&M.destroyNode(D),D=B}}),u.mounted=null;var E=u.mount.mounts.indexOf(d);S(E!==-1),u.mount.mounts.splice(E,1)},lookup(s,o){return s.node_ops.lookup(s,o)},mknod(s,o,u){var d=M.lookupPath(s,{parent:!0}),y=d.node,E=L.basename(s);if(!E)throw new M.ErrnoError(28);if(E==="."||E==="..")throw new M.ErrnoError(20);var C=M.mayCreate(y,E);if(C)throw new M.ErrnoError(C);if(!y.node_ops.mknod)throw new M.ErrnoError(63);return y.node_ops.mknod(y,E,o,u)},statfs(s){return M.statfsNode(M.lookupPath(s,{follow:!0}).node)},statfsStream(s){return M.statfsNode(s.node)},statfsNode(s){var o={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:M.nextInode,ffree:M.nextInode-1,fsid:42,flags:2,namelen:255};return s.node_ops.statfs&&Object.assign(o,s.node_ops.statfs(s.mount.opts.root)),o},create(s,o=438){return o&=4095,o|=32768,M.mknod(s,o,0)},mkdir(s,o=511){return o&=1023,o|=16384,M.mknod(s,o,0)},mkdirTree(s,o){var u=s.split("/"),d="";for(var y of u)if(y){(d||L.isAbs(s))&&(d+="/"),d+=y;try{M.mkdir(d,o)}catch(E){if(E.errno!=20)throw E}}},mkdev(s,o,u){return typeof u>"u"&&(u=o,o=438),o|=8192,M.mknod(s,o,u)},symlink(s,o){if(!ce.resolve(s))throw new M.ErrnoError(44);var u=M.lookupPath(o,{parent:!0}),d=u.node;if(!d)throw new M.ErrnoError(44);var y=L.basename(o),E=M.mayCreate(d,y);if(E)throw new M.ErrnoError(E);if(!d.node_ops.symlink)throw new M.ErrnoError(63);return d.node_ops.symlink(d,y,s)},rename(s,o){var u=L.dirname(s),d=L.dirname(o),y=L.basename(s),E=L.basename(o),C,D,B;if(C=M.lookupPath(s,{parent:!0}),D=C.node,C=M.lookupPath(o,{parent:!0}),B=C.node,!D||!B)throw new M.ErrnoError(44);if(D.mount!==B.mount)throw new M.ErrnoError(75);var re=M.lookupNode(D,y),ae=ce.relative(s,d);if(ae.charAt(0)!==".")throw new M.ErrnoError(28);if(ae=ce.relative(o,u),ae.charAt(0)!==".")throw new M.ErrnoError(55);var ve;try{ve=M.lookupNode(B,E)}catch{}if(re!==ve){var xe=M.isDir(re.mode),ge=M.mayDelete(D,y,xe);if(ge)throw new M.ErrnoError(ge);if(ge=ve?M.mayDelete(B,E,xe):M.mayCreate(B,E),ge)throw new M.ErrnoError(ge);if(!D.node_ops.rename)throw new M.ErrnoError(63);if(M.isMountpoint(re)||ve&&M.isMountpoint(ve))throw new M.ErrnoError(10);if(B!==D&&(ge=M.nodePermissions(D,"w"),ge))throw new M.ErrnoError(ge);M.hashRemoveNode(re);try{D.node_ops.rename(re,B,E),re.parent=B}catch(be){throw be}finally{M.hashAddNode(re)}}},rmdir(s){var o=M.lookupPath(s,{parent:!0}),u=o.node,d=L.basename(s),y=M.lookupNode(u,d),E=M.mayDelete(u,d,!0);if(E)throw new M.ErrnoError(E);if(!u.node_ops.rmdir)throw new M.ErrnoError(63);if(M.isMountpoint(y))throw new M.ErrnoError(10);u.node_ops.rmdir(u,d),M.destroyNode(y)},readdir(s){var o=M.lookupPath(s,{follow:!0}),u=o.node,d=M.checkOpExists(u.node_ops.readdir,54);return d(u)},unlink(s){var o=M.lookupPath(s,{parent:!0}),u=o.node;if(!u)throw new M.ErrnoError(44);var d=L.basename(s),y=M.lookupNode(u,d),E=M.mayDelete(u,d,!1);if(E)throw new M.ErrnoError(E);if(!u.node_ops.unlink)throw new M.ErrnoError(63);if(M.isMountpoint(y))throw new M.ErrnoError(10);u.node_ops.unlink(u,d),M.destroyNode(y)},readlink(s){var o=M.lookupPath(s),u=o.node;if(!u)throw new M.ErrnoError(44);if(!u.node_ops.readlink)throw new M.ErrnoError(28);return u.node_ops.readlink(u)},stat(s,o){var u=M.lookupPath(s,{follow:!o}),d=u.node,y=M.checkOpExists(d.node_ops.getattr,63);return y(d)},fstat(s){var o=M.getStreamChecked(s),u=o.node,d=o.stream_ops.getattr,y=d?o:u;return d??=u.node_ops.getattr,M.checkOpExists(d,63),d(y)},lstat(s){return M.stat(s,!0)},doChmod(s,o,u,d){M.doSetAttr(s,o,{mode:u&4095|o.mode&-4096,ctime:Date.now(),dontFollow:d})},chmod(s,o,u){var d;if(typeof s=="string"){var y=M.lookupPath(s,{follow:!u});d=y.node}else d=s;M.doChmod(null,d,o,u)},lchmod(s,o){M.chmod(s,o,!0)},fchmod(s,o){var u=M.getStreamChecked(s);M.doChmod(u,u.node,o,!1)},doChown(s,o,u){M.doSetAttr(s,o,{timestamp:Date.now(),dontFollow:u})},chown(s,o,u,d){var y;if(typeof s=="string"){var E=M.lookupPath(s,{follow:!d});y=E.node}else y=s;M.doChown(null,y,d)},lchown(s,o,u){M.chown(s,o,u,!0)},fchown(s,o,u){var d=M.getStreamChecked(s);M.doChown(d,d.node,!1)},doTruncate(s,o,u){if(M.isDir(o.mode))throw new M.ErrnoError(31);if(!M.isFile(o.mode))throw new M.ErrnoError(28);var d=M.nodePermissions(o,"w");if(d)throw new M.ErrnoError(d);M.doSetAttr(s,o,{size:u,timestamp:Date.now()})},truncate(s,o){if(o<0)throw new M.ErrnoError(28);var u;if(typeof s=="string"){var d=M.lookupPath(s,{follow:!0});u=d.node}else u=s;M.doTruncate(null,u,o)},ftruncate(s,o){var u=M.getStreamChecked(s);if(o<0||(u.flags&2097155)===0)throw new M.ErrnoError(28);M.doTruncate(u,u.node,o)},utime(s,o,u){var d=M.lookupPath(s,{follow:!0}),y=d.node,E=M.checkOpExists(y.node_ops.setattr,63);E(y,{atime:o,mtime:u})},open(s,o,u=438){if(s==="")throw new M.ErrnoError(44);o=typeof o=="string"?Xt(o):o,o&64?u=u&4095|32768:u=0;var d,y;if(typeof s=="object")d=s;else{y=s.endsWith("/");var E=M.lookupPath(s,{follow:!(o&131072),noent_okay:!0});d=E.node,s=E.path}var C=!1;if(o&64)if(d){if(o&128)throw new M.ErrnoError(20)}else{if(y)throw new M.ErrnoError(31);d=M.mknod(s,u|511,0),C=!0}if(!d)throw new M.ErrnoError(44);if(M.isChrdev(d.mode)&&(o&=-513),o&65536&&!M.isDir(d.mode))throw new M.ErrnoError(54);if(!C){var D=M.mayOpen(d,o);if(D)throw new M.ErrnoError(D)}o&512&&!C&&M.truncate(d,0),o&=-131713;var B=M.createStream({node:d,path:M.getPath(d),flags:o,seekable:!0,position:0,stream_ops:d.stream_ops,ungotten:[],error:!1});return B.stream_ops.open&&B.stream_ops.open(B),C&&M.chmod(d,u&511),t.logReadFiles&&!(o&1)&&(s in M.readFiles||(M.readFiles[s]=1)),B},close(s){if(M.isClosed(s))throw new M.ErrnoError(8);s.getdents&&(s.getdents=null);try{s.stream_ops.close&&s.stream_ops.close(s)}catch(o){throw o}finally{M.closeStream(s.fd)}s.fd=null},isClosed(s){return s.fd===null},llseek(s,o,u){if(M.isClosed(s))throw new M.ErrnoError(8);if(!s.seekable||!s.stream_ops.llseek)throw new M.ErrnoError(70);if(u!=0&&u!=1&&u!=2)throw new M.ErrnoError(28);return s.position=s.stream_ops.llseek(s,o,u),s.ungotten=[],s.position},read(s,o,u,d,y){if(S(u>=0),d<0||y<0)throw new M.ErrnoError(28);if(M.isClosed(s))throw new M.ErrnoError(8);if((s.flags&2097155)===1)throw new M.ErrnoError(8);if(M.isDir(s.node.mode))throw new M.ErrnoError(31);if(!s.stream_ops.read)throw new M.ErrnoError(28);var E=typeof y<"u";if(!E)y=s.position;else if(!s.seekable)throw new M.ErrnoError(70);var C=s.stream_ops.read(s,o,u,d,y);return E||(s.position+=C),C},write(s,o,u,d,y,E){if(S(u>=0),d<0||y<0)throw new M.ErrnoError(28);if(M.isClosed(s))throw new M.ErrnoError(8);if((s.flags&2097155)===0)throw new M.ErrnoError(8);if(M.isDir(s.node.mode))throw new M.ErrnoError(31);if(!s.stream_ops.write)throw new M.ErrnoError(28);s.seekable&&s.flags&1024&&M.llseek(s,0,2);var C=typeof y<"u";if(!C)y=s.position;else if(!s.seekable)throw new M.ErrnoError(70);var D=s.stream_ops.write(s,o,u,d,y,E);return C||(s.position+=D),D},mmap(s,o,u,d,y){if((d&2)!==0&&(y&2)===0&&(s.flags&2097155)!==2)throw new M.ErrnoError(2);if((s.flags&2097155)===1)throw new M.ErrnoError(2);if(!s.stream_ops.mmap)throw new M.ErrnoError(43);if(!o)throw new M.ErrnoError(28);return s.stream_ops.mmap(s,o,u,d,y)},msync(s,o,u,d,y){return S(u>=0),s.stream_ops.msync?s.stream_ops.msync(s,o,u,d,y):0},ioctl(s,o,u){if(!s.stream_ops.ioctl)throw new M.ErrnoError(59);return s.stream_ops.ioctl(s,o,u)},readFile(s,o={}){if(o.flags=o.flags||0,o.encoding=o.encoding||"binary",o.encoding!=="utf8"&&o.encoding!=="binary")throw new Error(`Invalid encoding type "${o.encoding}"`);var u=M.open(s,o.flags),d=M.stat(s),y=d.size,E=new Uint8Array(y);return M.read(u,E,0,y,0),o.encoding==="utf8"&&(E=Dt(E)),M.close(u),E},writeFile(s,o,u={}){u.flags=u.flags||577;var d=M.open(s,u.flags,u.mode);if(typeof o=="string"&&(o=new Uint8Array(We(o))),ArrayBuffer.isView(o))M.write(d,o,0,o.byteLength,void 0,u.canOwn);else throw new Error("Unsupported data type");M.close(d)},cwd:()=>M.currentPath,chdir(s){var o=M.lookupPath(s,{follow:!0});if(o.node===null)throw new M.ErrnoError(44);if(!M.isDir(o.node.mode))throw new M.ErrnoError(54);var u=M.nodePermissions(o.node,"x");if(u)throw new M.ErrnoError(u);M.currentPath=o.path},createDefaultDirectories(){M.mkdir("/tmp"),M.mkdir("/home"),M.mkdir("/home/web_user")},createDefaultDevices(){M.mkdir("/dev"),M.registerDevice(M.makedev(1,3),{read:()=>0,write:(d,y,E,C,D)=>C,llseek:()=>0}),M.mkdev("/dev/null",M.makedev(1,3)),Ke.register(M.makedev(5,0),Ke.default_tty_ops),Ke.register(M.makedev(6,0),Ke.default_tty1_ops),M.mkdev("/dev/tty",M.makedev(5,0)),M.mkdev("/dev/tty1",M.makedev(6,0));var s=new Uint8Array(1024),o=0,u=()=>(o===0&&(he(s),o=s.byteLength),s[--o]);M.createDevice("/dev","random",u),M.createDevice("/dev","urandom",u),M.mkdir("/dev/shm"),M.mkdir("/dev/shm/tmp")},createSpecialDirectories(){M.mkdir("/proc");var s=M.mkdir("/proc/self");M.mkdir("/proc/self/fd"),M.mount({mount(){var o=M.createNode(s,"fd",16895,73);return o.stream_ops={llseek:Me.stream_ops.llseek},o.node_ops={lookup(u,d){var y=+d,E=M.getStreamChecked(y),C={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>E.path},id:y+1};return C.parent=C,C},readdir(){return Array.from(M.streams.entries()).filter(([u,d])=>d).map(([u,d])=>u.toString())}},o}},{},"/proc/self/fd")},createStandardStreams(s,o,u){s?M.createDevice("/dev","stdin",s):M.symlink("/dev/tty","/dev/stdin"),o?M.createDevice("/dev","stdout",null,o):M.symlink("/dev/tty","/dev/stdout"),u?M.createDevice("/dev","stderr",null,u):M.symlink("/dev/tty1","/dev/stderr");var d=M.open("/dev/stdin",0),y=M.open("/dev/stdout",1),E=M.open("/dev/stderr",1);S(d.fd===0,`invalid handle for stdin (${d.fd})`),S(y.fd===1,`invalid handle for stdout (${y.fd})`),S(E.fd===2,`invalid handle for stderr (${E.fd})`)},staticInit(){M.nameTable=new Array(4096),M.mount(Me,{},"/"),M.createDefaultDirectories(),M.createDefaultDevices(),M.createSpecialDirectories(),M.filesystems={MEMFS:Me}},init(s,o,u){S(!M.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),M.initialized=!0,s??=t.stdin,o??=t.stdout,u??=t.stderr,M.createStandardStreams(s,o,u)},quit(){M.initialized=!1,cl(0);for(var s of M.streams)s&&M.close(s)},findObject(s,o){var u=M.analyzePath(s,o);return u.exists?u.object:null},analyzePath(s,o){try{var u=M.lookupPath(s,{follow:!o});s=u.path}catch{}var d={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var u=M.lookupPath(s,{parent:!0});d.parentExists=!0,d.parentPath=u.path,d.parentObject=u.node,d.name=L.basename(s),u=M.lookupPath(s,{follow:!o}),d.exists=!0,d.path=u.path,d.object=u.node,d.name=u.node.name,d.isRoot=u.path==="/"}catch(y){d.error=y.errno}return d},createPath(s,o,u,d){s=typeof s=="string"?s:M.getPath(s);for(var y=o.split("/").reverse();y.length;){var E=y.pop();if(E){var C=L.join2(s,E);try{M.mkdir(C)}catch(D){if(D.errno!=20)throw D}s=C}}return C},createFile(s,o,u,d,y){var E=L.join2(typeof s=="string"?s:M.getPath(s),o),C=Mt(d,y);return M.create(E,C)},createDataFile(s,o,u,d,y,E){var C=o;s&&(s=typeof s=="string"?s:M.getPath(s),C=o?L.join2(s,o):s);var D=Mt(d,y),B=M.create(C,D);if(u){if(typeof u=="string"){for(var re=new Array(u.length),ae=0,ve=u.length;ae<ve;++ae)re[ae]=u.charCodeAt(ae);u=re}M.chmod(B,D|146);var xe=M.open(B,577);M.write(xe,u,0,u.length,0,E),M.close(xe),M.chmod(B,D)}},createDevice(s,o,u,d){var y=L.join2(typeof s=="string"?s:M.getPath(s),o),E=Mt(!!u,!!d);M.createDevice.major??=64;var C=M.makedev(M.createDevice.major++,0);return M.registerDevice(C,{open(D){D.seekable=!1},close(D){d?.buffer?.length&&d(10)},read(D,B,re,ae,ve){for(var xe=0,ge=0;ge<ae;ge++){var be;try{be=u()}catch{throw new M.ErrnoError(29)}if(be===void 0&&xe===0)throw new M.ErrnoError(6);if(be==null)break;xe++,B[re+ge]=be}return xe&&(D.node.atime=Date.now()),xe},write(D,B,re,ae,ve){for(var xe=0;xe<ae;xe++)try{d(B[re+xe])}catch{throw new M.ErrnoError(29)}return ae&&(D.node.mtime=D.node.ctime=Date.now()),xe}}),M.mkdev(y,E,C)},forceLoadFile(s){if(s.isDevice||s.isFolder||s.link||s.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{s.contents=b(s.url),s.usedBytes=s.contents.length}catch{throw new M.ErrnoError(29)}},createLazyFile(s,o,u,d,y){class E{lengthKnown=!1;chunks=[];get(ge){if(!(ge>this.length-1||ge<0)){var be=ge%this.chunkSize,it=ge/this.chunkSize|0;return this.getter(it)[be]}}setDataGetter(ge){this.getter=ge}cacheLength(){var ge=new XMLHttpRequest;if(ge.open("HEAD",u,!1),ge.send(null),!(ge.status>=200&&ge.status<300||ge.status===304))throw new Error("Couldn't load "+u+". Status: "+ge.status);var be=Number(ge.getResponseHeader("Content-length")),it,Lt=(it=ge.getResponseHeader("Accept-Ranges"))&&it==="bytes",xt=(it=ge.getResponseHeader("Content-Encoding"))&&it==="gzip",Zt=1024*1024;Lt||(Zt=be);var It=(pn,Tn)=>{if(pn>Tn)throw new Error("invalid range ("+pn+", "+Tn+") or no bytes requested!");if(Tn>be-1)throw new Error("only "+be+" bytes available! programmer error!");var Vt=new XMLHttpRequest;if(Vt.open("GET",u,!1),be!==Zt&&Vt.setRequestHeader("Range","bytes="+pn+"-"+Tn),Vt.responseType="arraybuffer",Vt.overrideMimeType&&Vt.overrideMimeType("text/plain; charset=x-user-defined"),Vt.send(null),!(Vt.status>=200&&Vt.status<300||Vt.status===304))throw new Error("Couldn't load "+u+". Status: "+Vt.status);return Vt.response!==void 0?new Uint8Array(Vt.response||[]):We(Vt.responseText||"")},wn=this;wn.setDataGetter(pn=>{var Tn=pn*Zt,Vt=(pn+1)*Zt-1;if(Vt=Math.min(Vt,be-1),typeof wn.chunks[pn]>"u"&&(wn.chunks[pn]=It(Tn,Vt)),typeof wn.chunks[pn]>"u")throw new Error("doXHR failed!");return wn.chunks[pn]}),(xt||!be)&&(Zt=be=1,be=this.getter(0).length,Zt=be,U("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=be,this._chunkSize=Zt,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!r)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var C=new E,D={isDevice:!1,contents:C}}else var D={isDevice:!1,url:u};var B=M.createFile(s,o,D,d,y);D.contents?B.contents=D.contents:D.url&&(B.contents=null,B.url=D.url),Object.defineProperties(B,{usedBytes:{get:function(){return this.contents.length}}});var re={},ae=Object.keys(B.stream_ops);ae.forEach(xe=>{var ge=B.stream_ops[xe];re[xe]=(...be)=>(M.forceLoadFile(B),ge(...be))});function ve(xe,ge,be,it,Lt){var xt=xe.node.contents;if(Lt>=xt.length)return 0;var Zt=Math.min(xt.length-Lt,it);if(S(Zt>=0),xt.slice)for(var It=0;It<Zt;It++)ge[be+It]=xt[Lt+It];else for(var It=0;It<Zt;It++)ge[be+It]=xt.get(Lt+It);return Zt}return re.read=(xe,ge,be,it,Lt)=>(M.forceLoadFile(B),ve(xe,ge,be,it,Lt)),re.mmap=(xe,ge,be,it,Lt)=>{M.forceLoadFile(B);var xt=nt();if(!xt)throw new M.ErrnoError(48);return ve(xe,lt,xt,ge,be),{ptr:xt,allocated:!0}},B.stream_ops=re,B},absolutePath(){ne("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){ne("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){ne("FS.createLink has been removed; use FS.symlink instead")},joinPath(){ne("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){ne("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){ne("FS.standardizePath has been removed; use PATH.normalize instead")}},Ot={DEFAULT_POLLMASK:5,calculateAt(s,o,u){if(L.isAbs(o))return o;var d;if(s===-100)d=M.cwd();else{var y=Ot.getStreamFromFD(s);d=y.path}if(o.length==0){if(!u)throw new M.ErrnoError(44);return d}return d+"/"+o},writeStat(s,o){ue[s>>2]=o.dev,ue[s+4>>2]=o.mode,_e[s+8>>2]=o.nlink,ue[s+12>>2]=o.uid,ue[s+16>>2]=o.gid,ue[s+20>>2]=o.rdev,Nt[s+24>>3]=BigInt(o.size),ue[s+32>>2]=4096,ue[s+36>>2]=o.blocks;var u=o.atime.getTime(),d=o.mtime.getTime(),y=o.ctime.getTime();return Nt[s+40>>3]=BigInt(Math.floor(u/1e3)),_e[s+48>>2]=u%1e3*1e3*1e3,Nt[s+56>>3]=BigInt(Math.floor(d/1e3)),_e[s+64>>2]=d%1e3*1e3*1e3,Nt[s+72>>3]=BigInt(Math.floor(y/1e3)),_e[s+80>>2]=y%1e3*1e3*1e3,Nt[s+88>>3]=BigInt(o.ino),0},writeStatFs(s,o){ue[s+4>>2]=o.bsize,ue[s+40>>2]=o.bsize,ue[s+8>>2]=o.blocks,ue[s+12>>2]=o.bfree,ue[s+16>>2]=o.bavail,ue[s+20>>2]=o.files,ue[s+24>>2]=o.ffree,ue[s+28>>2]=o.fsid,ue[s+44>>2]=o.flags,ue[s+36>>2]=o.namelen},doMsync(s,o,u,d,y){if(!M.isFile(o.node.mode))throw new M.ErrnoError(43);if(d&2)return 0;var E=Qe.slice(s,s+u);M.msync(o,E,y,u,d)},getStreamFromFD(s){var o=M.getStreamChecked(s);return o},varargs:void 0,getStr(s){var o=pt(s);return o}};function qt(s,o,u){try{var d=Ot.getStreamFromFD(s);if(S(!u),d.fd===o)return-28;if(o<0||o>=M.MAX_OPEN_FDS)return-8;var y=M.getStream(o);return y&&M.close(y),M.dupStream(d,o).fd}catch(E){if(typeof M>"u"||E.name!=="ErrnoError")throw E;return-E.errno}}var fn=()=>{S(Ot.varargs!=null);var s=ue[+Ot.varargs>>2];return Ot.varargs+=4,s},on=fn;function Qt(s,o,u){Ot.varargs=u;try{var d=Ot.getStreamFromFD(s);switch(o){case 0:{var y=fn();if(y<0)return-28;for(;M.streams[y];)y++;var E;return E=M.dupStream(d,y),E.fd}case 1:case 2:return 0;case 3:return d.flags;case 4:{var y=fn();return d.flags|=y,0}case 12:{var y=on(),C=0;return de[y+C>>1]=2,0}case 13:case 14:return 0}return-28}catch(D){if(typeof M>"u"||D.name!=="ErrnoError")throw D;return-D.errno}}function ln(s,o){try{return Ot.writeStat(o,M.fstat(s))}catch(u){if(typeof M>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function mi(s,o,u){Ot.varargs=u;try{var d=Ot.getStreamFromFD(s);switch(o){case 21509:return d.tty?0:-59;case 21505:{if(!d.tty)return-59;if(d.tty.ops.ioctl_tcgets){var y=d.tty.ops.ioctl_tcgets(d),E=on();ue[E>>2]=y.c_iflag||0,ue[E+4>>2]=y.c_oflag||0,ue[E+8>>2]=y.c_cflag||0,ue[E+12>>2]=y.c_lflag||0;for(var C=0;C<32;C++)lt[E+C+17]=y.c_cc[C]||0;return 0}return 0}case 21510:case 21511:case 21512:return d.tty?0:-59;case 21506:case 21507:case 21508:{if(!d.tty)return-59;if(d.tty.ops.ioctl_tcsets){for(var E=on(),D=ue[E>>2],B=ue[E+4>>2],re=ue[E+8>>2],ae=ue[E+12>>2],ve=[],C=0;C<32;C++)ve.push(lt[E+C+17]);return d.tty.ops.ioctl_tcsets(d.tty,o,{c_iflag:D,c_oflag:B,c_cflag:re,c_lflag:ae,c_cc:ve})}return 0}case 21519:{if(!d.tty)return-59;var E=on();return ue[E>>2]=0,0}case 21520:return d.tty?-28:-59;case 21531:{var E=on();return M.ioctl(d,o,E)}case 21523:{if(!d.tty)return-59;if(d.tty.ops.ioctl_tiocgwinsz){var xe=d.tty.ops.ioctl_tiocgwinsz(d.tty),E=on();de[E>>1]=xe[0],de[E+2>>1]=xe[1]}return 0}case 21524:return d.tty?0:-59;case 21515:return d.tty?0:-59;default:return-28}}catch(ge){if(typeof M>"u"||ge.name!=="ErrnoError")throw ge;return-ge.errno}}function qn(s,o){try{return s=Ot.getStr(s),Ot.writeStat(o,M.lstat(s))}catch(u){if(typeof M>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function Oo(s,o,u,d){try{o=Ot.getStr(o);var y=d&256,E=d&4096;return d=d&-6401,S(!d,`unknown flags in __syscall_newfstatat: ${d}`),o=Ot.calculateAt(s,o,E),Ot.writeStat(u,y?M.lstat(o):M.stat(o))}catch(C){if(typeof M>"u"||C.name!=="ErrnoError")throw C;return-C.errno}}function Nr(s,o,u,d){Ot.varargs=d;try{o=Ot.getStr(o),o=Ot.calculateAt(s,o);var y=d?fn():0;return M.open(o,u,y).fd}catch(E){if(typeof M>"u"||E.name!=="ErrnoError")throw E;return-E.errno}}function ko(s,o){try{return s=Ot.getStr(s),Ot.writeStat(o,M.stat(s))}catch(u){if(typeof M>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}var Bo=()=>ne("native code called abort()"),rn=s=>{for(var o="";;){var u=Qe[s++];if(!u)return o;o+=String.fromCharCode(u)}},gi={},_i={},ar={},Bi=class extends Error{constructor(o){super(o),this.name="BindingError"}},Tt=s=>{throw new Bi(s)};function ga(s,o,u={}){var d=o.name;if(s||Tt(`type "${d}" must have a positive integer typeid pointer`),_i.hasOwnProperty(s)){if(u.ignoreDuplicateRegistrations)return;Tt(`Cannot register type '${d}' twice`)}if(_i[s]=o,delete ar[s],gi.hasOwnProperty(s)){var y=gi[s];delete gi[s],y.forEach(E=>E())}}function Mn(s,o,u={}){if(o.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return ga(s,o,u)}var _a=(s,o,u)=>{switch(o){case 1:return u?d=>lt[d]:d=>Qe[d];case 2:return u?d=>de[d>>1]:d=>ye[d>>1];case 4:return u?d=>ue[d>>2]:d=>_e[d>>2];case 8:return u?d=>Nt[d>>3]:d=>W[d>>3];default:throw new TypeError(`invalid integer width (${o}): ${s}`)}},vi=s=>{if(s===null)return"null";var o=typeof s;return o==="object"||o==="array"||o==="function"?s.toString():""+s},va=(s,o,u,d)=>{if(o<u||o>d)throw new TypeError(`Passing a number "${vi(o)}" from JS side to C/C++ side to an argument of type "${s}", which is outside the valid range [${u}, ${d}]!`)},Or=(s,o,u,d,y)=>{o=rn(o);const E=d===0n;let C=D=>D;if(E){const D=u*8;C=B=>BigInt.asUintN(D,B),y=C(y)}Mn(s,{name:o,fromWireType:C,toWireType:(D,B)=>{if(typeof B=="number")B=BigInt(B);else if(typeof B!="bigint")throw new TypeError(`Cannot convert "${vi(B)}" to ${this.name}`);return va(o,B,d,y),B},argPackAdvance:kn,readValueFromPointer:_a(o,u,!E),destructorFunction:null})},kn=8,ya=(s,o,u,d)=>{o=rn(o),Mn(s,{name:o,fromWireType:function(y){return!!y},toWireType:function(y,E){return E?u:d},argPackAdvance:kn,readValueFromPointer:function(y){return this.fromWireType(Qe[y])},destructorFunction:null})},Ls=s=>({count:s.count,deleteScheduled:s.deleteScheduled,preservePointerOnDelete:s.preservePointerOnDelete,ptr:s.ptr,ptrType:s.ptrType,smartPtr:s.smartPtr,smartPtrType:s.smartPtrType}),kr=s=>{function o(u){return u.$$.ptrType.registeredClass.name}Tt(o(s)+" instance already deleted")},Br=!1,Is=s=>{},Fs=s=>{s.smartPtr?s.smartPtrType.rawDestructor(s.smartPtr):s.ptrType.registeredClass.rawDestructor(s.ptr)},Us=s=>{s.count.value-=1;var o=s.count.value===0;o&&Fs(s)},Ns=(s,o,u)=>{if(o===u)return s;if(u.baseClass===void 0)return null;var d=Ns(s,o,u.baseClass);return d===null?null:u.downcast(d)},gt={},or={},xa=(s,o)=>{for(o===void 0&&Tt("ptr should not be undefined");s.baseClass;)o=s.upcast(o),s=s.baseClass;return o},mt=(s,o)=>(o=xa(s,o),or[o]),Os=class extends Error{constructor(o){super(o),this.name="InternalError"}},ht=s=>{throw new Os(s)},lr=(s,o)=>{(!o.ptrType||!o.ptr)&&ht("makeClassHandle requires ptr and ptrType");var u=!!o.smartPtrType,d=!!o.smartPtr;return u!==d&&ht("Both smartPtrType and smartPtr must be specified"),o.count={value:1},zi(Object.create(s,{$$:{value:o,writable:!0}}))};function zr(s){var o=this.getPointee(s);if(!o)return this.destructor(s),null;var u=mt(this.registeredClass,o);if(u!==void 0){if(u.$$.count.value===0)return u.$$.ptr=o,u.$$.smartPtr=s,u.clone();var d=u.clone();return this.destructor(s),d}function y(){return this.isSmartPointer?lr(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:o,smartPtrType:this,smartPtr:s}):lr(this.registeredClass.instancePrototype,{ptrType:this,ptr:s})}var E=this.registeredClass.getActualType(o),C=gt[E];if(!C)return y.call(this);var D;this.isConst?D=C.constPointerType:D=C.pointerType;var B=Ns(o,this.registeredClass,D.registeredClass);return B===null?y.call(this):this.isSmartPointer?lr(D.registeredClass.instancePrototype,{ptrType:D,ptr:B,smartPtrType:this,smartPtr:s}):lr(D.registeredClass.instancePrototype,{ptrType:D,ptr:B})}var zi=s=>typeof FinalizationRegistry>"u"?(zi=o=>o,s):(Br=new FinalizationRegistry(o=>{console.warn(o.leakWarning),Us(o.$$)}),zi=o=>{var u=o.$$,d=!!u.smartPtr;if(d){var y={$$:u},E=u.ptrType.registeredClass,C=new Error(`Embind found a leaked C++ instance ${E.name} <${Be(u.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(C,zr),y.leakWarning=C.stack.replace(/^Error: /,""),Br.register(o,y,o)}return o},Is=o=>Br.unregister(o),zi(s)),wa=()=>{let s=cr.prototype;Object.assign(s,{isAliasOf(u){if(!(this instanceof cr)||!(u instanceof cr))return!1;var d=this.$$.ptrType.registeredClass,y=this.$$.ptr;u.$$=u.$$;for(var E=u.$$.ptrType.registeredClass,C=u.$$.ptr;d.baseClass;)y=d.upcast(y),d=d.baseClass;for(;E.baseClass;)C=E.upcast(C),E=E.baseClass;return d===E&&y===C},clone(){if(this.$$.ptr||kr(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var u=zi(Object.create(Object.getPrototypeOf(this),{$$:{value:Ls(this.$$)}}));return u.$$.count.value+=1,u.$$.deleteScheduled=!1,u},delete(){this.$$.ptr||kr(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Tt("Object already scheduled for deletion"),Is(this),Us(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||kr(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Tt("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const o=Symbol.dispose;o&&(s[o]=s.delete)};function cr(){}var Bn=(s,o)=>Object.defineProperty(o,"name",{value:s}),ks=(s,o,u)=>{if(s[o].overloadTable===void 0){var d=s[o];s[o]=function(...y){return s[o].overloadTable.hasOwnProperty(y.length)||Tt(`Function '${u}' called with an invalid number of arguments (${y.length}) - expects one of (${s[o].overloadTable})!`),s[o].overloadTable[y.length].apply(this,y)},s[o].overloadTable=[],s[o].overloadTable[d.argCount]=d}},Hr=(s,o,u)=>{t.hasOwnProperty(s)?((u===void 0||t[s].overloadTable!==void 0&&t[s].overloadTable[u]!==void 0)&&Tt(`Cannot register public name '${s}' twice`),ks(t,s,s),t[s].overloadTable.hasOwnProperty(u)&&Tt(`Cannot register multiple overloads of a function with the same number of arguments (${u})!`),t[s].overloadTable[u]=o):(t[s]=o,t[s].argCount=u)},zo=48,Ho=57,Vo=s=>{S(typeof s=="string"),s=s.replace(/[^a-zA-Z0-9_]/g,"$");var o=s.charCodeAt(0);return o>=zo&&o<=Ho?`_${s}`:s};function Go(s,o,u,d,y,E,C,D){this.name=s,this.constructor=o,this.instancePrototype=u,this.rawDestructor=d,this.baseClass=y,this.getActualType=E,this.upcast=C,this.downcast=D,this.pureVirtualFunctions=[]}var Vr=(s,o,u)=>{for(;o!==u;)o.upcast||Tt(`Expected null or instance of ${u.name}, got an instance of ${o.name}`),s=o.upcast(s),o=o.baseClass;return s};function Wo(s,o){if(o===null)return this.isReference&&Tt(`null is not a valid ${this.name}`),0;o.$$||Tt(`Cannot pass "${vi(o)}" as a ${this.name}`),o.$$.ptr||Tt(`Cannot pass deleted object as a pointer of type ${this.name}`);var u=o.$$.ptrType.registeredClass,d=Vr(o.$$.ptr,u,this.registeredClass);return d}function $o(s,o){var u;if(o===null)return this.isReference&&Tt(`null is not a valid ${this.name}`),this.isSmartPointer?(u=this.rawConstructor(),s!==null&&s.push(this.rawDestructor,u),u):0;(!o||!o.$$)&&Tt(`Cannot pass "${vi(o)}" as a ${this.name}`),o.$$.ptr||Tt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&o.$$.ptrType.isConst&&Tt(`Cannot convert argument of type ${o.$$.smartPtrType?o.$$.smartPtrType.name:o.$$.ptrType.name} to parameter type ${this.name}`);var d=o.$$.ptrType.registeredClass;if(u=Vr(o.$$.ptr,d,this.registeredClass),this.isSmartPointer)switch(o.$$.smartPtr===void 0&&Tt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:o.$$.smartPtrType===this?u=o.$$.smartPtr:Tt(`Cannot convert argument of type ${o.$$.smartPtrType?o.$$.smartPtrType.name:o.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:u=o.$$.smartPtr;break;case 2:if(o.$$.smartPtrType===this)u=o.$$.smartPtr;else{var y=o.clone();u=this.rawShare(u,tn.toHandle(()=>y.delete())),s!==null&&s.push(this.rawDestructor,u)}break;default:Tt("Unsupporting sharing policy")}return u}function jo(s,o){if(o===null)return this.isReference&&Tt(`null is not a valid ${this.name}`),0;o.$$||Tt(`Cannot pass "${vi(o)}" as a ${this.name}`),o.$$.ptr||Tt(`Cannot pass deleted object as a pointer of type ${this.name}`),o.$$.ptrType.isConst&&Tt(`Cannot convert argument of type ${o.$$.ptrType.name} to parameter type ${this.name}`);var u=o.$$.ptrType.registeredClass,d=Vr(o.$$.ptr,u,this.registeredClass);return d}function Gr(s){return this.fromWireType(_e[s>>2])}var Xo=()=>{Object.assign(Wr.prototype,{getPointee(s){return this.rawGetPointee&&(s=this.rawGetPointee(s)),s},destructor(s){this.rawDestructor?.(s)},argPackAdvance:kn,readValueFromPointer:Gr,fromWireType:zr})};function Wr(s,o,u,d,y,E,C,D,B,re,ae){this.name=s,this.registeredClass=o,this.isReference=u,this.isConst=d,this.isSmartPointer=y,this.pointeeType=E,this.sharingPolicy=C,this.rawGetPointee=D,this.rawConstructor=B,this.rawShare=re,this.rawDestructor=ae,!y&&o.baseClass===void 0?d?(this.toWireType=Wo,this.destructorFunction=null):(this.toWireType=jo,this.destructorFunction=null):this.toWireType=$o}var Ea=(s,o,u)=>{t.hasOwnProperty(s)||ht("Replacing nonexistent public symbol"),t[s].overloadTable!==void 0&&u!==void 0?t[s].overloadTable[u]=o:(t[s]=o,t[s].argCount=u)},ba=[],$r,Te=s=>{var o=ba[s];return o||(ba[s]=o=$r.get(s)),S($r.get(s)==o,"JavaScript-side Wasm function table mirror is out of date!"),o},Yn=(s,o,u=!1)=>{S(!u,"Async bindings are only supported with JSPI."),s=rn(s);function d(){var E=Te(o);return E}var y=d();return typeof y!="function"&&Tt(`unknown function pointer with signature ${s}: ${o}`),y};class qo extends Error{}var Sa=s=>{var o=th(s),u=rn(o);return yi(o),u},Si=(s,o)=>{var u=[],d={};function y(E){if(!d[E]&&!_i[E]){if(ar[E]){ar[E].forEach(y);return}u.push(E),d[E]=!0}}throw o.forEach(y),new qo(`${s}: `+u.map(Sa).join([", "]))},zn=(s,o,u)=>{s.forEach(D=>ar[D]=o);function d(D){var B=u(D);B.length!==s.length&&ht("Mismatched type converter count");for(var re=0;re<s.length;++re)Mn(s[re],B[re])}var y=new Array(o.length),E=[],C=0;o.forEach((D,B)=>{_i.hasOwnProperty(D)?y[B]=_i[D]:(E.push(D),gi.hasOwnProperty(D)||(gi[D]=[]),gi[D].push(()=>{y[B]=_i[D],++C,C===E.length&&d(y)}))}),E.length===0&&d(y)},Yo=(s,o,u,d,y,E,C,D,B,re,ae,ve,xe)=>{ae=rn(ae),E=Yn(y,E),D&&=Yn(C,D),re&&=Yn(B,re),xe=Yn(ve,xe);var ge=Vo(ae);Hr(ge,function(){Si(`Cannot construct ${ae} due to unbound types`,[d])}),zn([s,o,u],d?[d]:[],be=>{be=be[0];var it,Lt;d?(it=be.registeredClass,Lt=it.instancePrototype):Lt=cr.prototype;var xt=Bn(ae,function(...Vt){if(Object.getPrototypeOf(this)!==Zt)throw new Bi(`Use 'new' to construct ${ae}`);if(It.constructor_body===void 0)throw new Bi(`${ae} has no accessible constructor`);var hr=It.constructor_body[Vt.length];if(hr===void 0)throw new Bi(`Tried to invoke ctor of ${ae} with invalid number of parameters (${Vt.length}) - expected (${Object.keys(It.constructor_body).toString()}) parameters instead!`);return hr.apply(this,Vt)}),Zt=Object.create(Lt,{constructor:{value:xt}});xt.prototype=Zt;var It=new Go(ae,xt,Zt,xe,it,E,D,re);It.baseClass&&(It.baseClass.__derivedClasses??=[],It.baseClass.__derivedClasses.push(It));var wn=new Wr(ae,It,!0,!1,!1),pn=new Wr(ae+"*",It,!1,!1,!1),Tn=new Wr(ae+" const*",It,!1,!0,!1);return gt[s]={pointerType:pn,constPointerType:Tn},Ea(ge,xt),[wn,pn,Tn]})},Bs=s=>{for(;s.length;){var o=s.pop(),u=s.pop();u(o)}};function Ma(s){for(var o=1;o<s.length;++o)if(s[o]!==null&&s[o].destructorFunction===void 0)return!0;return!1}function Ko(s,o,u,d,y){if(s<o||s>u){var E=o==u?o:`${o} to ${u}`;y(`function ${d} called with ${s} arguments, expected ${E}`)}}function Zo(s,o,u,d){var y=Ma(s),E=s.length-2,C=[],D=["fn"];o&&D.push("thisWired");for(var B=0;B<E;++B)C.push(`arg${B}`),D.push(`arg${B}Wired`);C=C.join(","),D=D.join(",");var re=`return function (${C}) {
`;re+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,y&&(re+=`var destructors = [];
`);var ae=y?"destructors":"null",ve=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];o&&(re+=`var thisWired = classParam['toWireType'](${ae}, this);
`);for(var B=0;B<E;++B)re+=`var arg${B}Wired = argType${B}['toWireType'](${ae}, arg${B});
`,ve.push(`argType${B}`);if(re+=(u||d?"var rv = ":"")+`invoker(${D});
`,y)re+=`runDestructors(destructors);
`;else for(var B=o?1:2;B<s.length;++B){var xe=B===1?"thisWired":"arg"+(B-2)+"Wired";s[B].destructorFunction!==null&&(re+=`${xe}_dtor(${xe});
`,ve.push(`${xe}_dtor`))}return u&&(re+=`var ret = retType['fromWireType'](rv);
return ret;
`),re+=`}
`,ve.push("checkArgCount","minArgs","maxArgs"),re=`if (arguments.length !== ${ve.length}){ throw new Error(humanName + "Expected ${ve.length} closure arguments " + arguments.length + " given."); }
${re}`,[ve,re]}function Jo(s){for(var o=s.length-2,u=s.length-1;u>=2&&s[u].optional;--u)o--;return o}function jr(s,o,u,d,y,E){var C=o.length;C<2&&Tt("argTypes array size mismatch! Must at least get return value and 'this' types!"),S(!E,"Async bindings are only supported with JSPI.");for(var D=o[1]!==null&&u!==null,B=Ma(o),re=o[0].name!=="void",ae=C-2,ve=Jo(o),xe=[s,Tt,d,y,Bs,o[0],o[1]],ge=0;ge<C-2;++ge)xe.push(o[ge+2]);if(!B)for(var ge=D?1:2;ge<o.length;++ge)o[ge].destructorFunction!==null&&xe.push(o[ge].destructorFunction);xe.push(Ko,ve,ae);let[be,it]=Zo(o,D,re,E);var Lt=new Function(...be,it)(...xe);return Bn(s,Lt)}var Xr=(s,o)=>{for(var u=[],d=0;d<s;d++)u.push(_e[o+d*4>>2]);return u},zs=s=>{s=s.trim();const o=s.indexOf("(");return o===-1?s:(S(s.endsWith(")"),"Parentheses for argument names should match."),s.slice(0,o))},Qo=(s,o,u,d,y,E,C,D,B)=>{var re=Xr(u,d);o=rn(o),o=zs(o),E=Yn(y,E,D),zn([],[s],ae=>{ae=ae[0];var ve=`${ae.name}.${o}`;function xe(){Si(`Cannot call ${ve} due to unbound types`,re)}o.startsWith("@@")&&(o=Symbol[o.substring(2)]);var ge=ae.registeredClass.constructor;return ge[o]===void 0?(xe.argCount=u-1,ge[o]=xe):(ks(ge,o,ve),ge[o].overloadTable[u-1]=xe),zn([],re,be=>{var it=[be[0],null].concat(be.slice(1)),Lt=jr(ve,it,null,E,C,D);if(ge[o].overloadTable===void 0?(Lt.argCount=u-1,ge[o]=Lt):ge[o].overloadTable[u-1]=Lt,ae.registeredClass.__derivedClasses)for(const xt of ae.registeredClass.__derivedClasses)xt.constructor.hasOwnProperty(o)||(xt.constructor[o]=Lt);return[]}),[]})},el=(s,o,u,d,y,E)=>{S(o>0);var C=Xr(o,u);y=Yn(d,y),zn([],[s],D=>{D=D[0];var B=`constructor ${D.name}`;if(D.registeredClass.constructor_body===void 0&&(D.registeredClass.constructor_body=[]),D.registeredClass.constructor_body[o-1]!==void 0)throw new Bi(`Cannot register multiple constructors with identical number of parameters (${o-1}) for class '${D.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return D.registeredClass.constructor_body[o-1]=()=>{Si(`Cannot construct ${D.name} due to unbound types`,C)},zn([],C,re=>(re.splice(1,0,null),D.registeredClass.constructor_body[o-1]=jr(B,re,null,y,E),[])),[]})},tl=(s,o,u,d,y,E,C,D,B,re)=>{var ae=Xr(u,d);o=rn(o),o=zs(o),E=Yn(y,E,B),zn([],[s],ve=>{ve=ve[0];var xe=`${ve.name}.${o}`;o.startsWith("@@")&&(o=Symbol[o.substring(2)]),D&&ve.registeredClass.pureVirtualFunctions.push(o);function ge(){Si(`Cannot call ${xe} due to unbound types`,ae)}var be=ve.registeredClass.instancePrototype,it=be[o];return it===void 0||it.overloadTable===void 0&&it.className!==ve.name&&it.argCount===u-2?(ge.argCount=u-2,ge.className=ve.name,be[o]=ge):(ks(be,o,xe),be[o].overloadTable[u-2]=ge),zn([],ae,Lt=>{var xt=jr(xe,Lt,ve,E,C,B);return be[o].overloadTable===void 0?(xt.argCount=u-2,be[o]=xt):be[o].overloadTable[u-2]=xt,[]}),[]})},Ta=(s,o,u)=>(s instanceof Object||Tt(`${u} with invalid "this": ${s}`),s instanceof o.registeredClass.constructor||Tt(`${u} incompatible with "this" of type ${s.constructor.name}`),s.$$.ptr||Tt(`cannot call emscripten binding method ${u} on deleted object`),Vr(s.$$.ptr,s.$$.ptrType.registeredClass,o.registeredClass)),nl=(s,o,u,d,y,E,C,D,B,re)=>{o=rn(o),y=Yn(d,y),zn([],[s],ae=>{ae=ae[0];var ve=`${ae.name}.${o}`,xe={get(){Si(`Cannot access ${ve} due to unbound types`,[u,C])},enumerable:!0,configurable:!0};return B?xe.set=()=>Si(`Cannot access ${ve} due to unbound types`,[u,C]):xe.set=ge=>Tt(ve+" is a read-only property"),Object.defineProperty(ae.registeredClass.instancePrototype,o,xe),zn([],B?[u,C]:[u],ge=>{var be=ge[0],it={get(){var xt=Ta(this,ae,ve+" getter");return be.fromWireType(y(E,xt))},enumerable:!0};if(B){B=Yn(D,B);var Lt=ge[1];it.set=function(xt){var Zt=Ta(this,ae,ve+" setter"),It=[];B(re,Zt,Lt.toWireType(It,xt)),Bs(It)}}return Object.defineProperty(ae.registeredClass.instancePrototype,o,it),[]}),[]})},il=(s,o,u)=>{s=rn(s),zn([],[o],d=>(d=d[0],t[s]=d.fromWireType(u),[]))},Aa=[],Kn=[0,1,,1,null,1,!0,1,!1,1],Hs=s=>{s>9&&--Kn[s+1]===0&&(S(Kn[s]!==void 0,"Decref for unallocated handle."),Kn[s]=void 0,Aa.push(s))},tn={toValue:s=>(s||Tt(`Cannot use deleted val. handle = ${s}`),S(s===2||Kn[s]!==void 0&&s%2===0,`invalid handle: ${s}`),Kn[s]),toHandle:s=>{switch(s){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const o=Aa.pop()||Kn.length;return Kn[o]=s,Kn[o+1]=1,o}}}},w={name:"emscripten::val",fromWireType:s=>{var o=tn.toValue(s);return Hs(s),o},toWireType:(s,o)=>tn.toHandle(o),argPackAdvance:kn,readValueFromPointer:Gr,destructorFunction:null},P=s=>Mn(s,w),H=(s,o,u)=>{switch(o){case 1:return u?function(d){return this.fromWireType(lt[d])}:function(d){return this.fromWireType(Qe[d])};case 2:return u?function(d){return this.fromWireType(de[d>>1])}:function(d){return this.fromWireType(ye[d>>1])};case 4:return u?function(d){return this.fromWireType(ue[d>>2])}:function(d){return this.fromWireType(_e[d>>2])};default:throw new TypeError(`invalid integer width (${o}): ${s}`)}},z=(s,o,u,d)=>{o=rn(o);function y(){}y.values={},Mn(s,{name:o,constructor:y,fromWireType:function(E){return this.constructor.values[E]},toWireType:(E,C)=>C.value,argPackAdvance:kn,readValueFromPointer:H(o,u,d),destructorFunction:null}),Hr(o,y)},q=(s,o)=>{var u=_i[s];return u===void 0&&Tt(`${o} has unknown type ${Sa(s)}`),u},le=(s,o,u)=>{var d=q(s,"enum");o=rn(o);var y=d.constructor,E=Object.create(d.constructor.prototype,{value:{value:u},constructor:{value:Bn(`${d.name}_${o}`,function(){})}});y.values[u]=E,y[o]=E},Le=(s,o)=>{switch(o){case 4:return function(u){return this.fromWireType(Ae[u>>2])};case 8:return function(u){return this.fromWireType(dt[u>>3])};default:throw new TypeError(`invalid float width (${o}): ${s}`)}},Je=(s,o,u)=>{o=rn(o),Mn(s,{name:o,fromWireType:d=>d,toWireType:(d,y)=>{if(typeof y!="number"&&typeof y!="boolean")throw new TypeError(`Cannot convert ${vi(y)} to ${this.name}`);return y},argPackAdvance:kn,readValueFromPointer:Le(o,u),destructorFunction:null})},_t=(s,o,u,d,y,E,C,D)=>{var B=Xr(o,u);s=rn(s),s=zs(s),y=Yn(d,y,C),Hr(s,function(){Si(`Cannot call ${s} due to unbound types`,B)},o-1),zn([],B,re=>{var ae=[re[0],null].concat(re.slice(1));return Ea(s,jr(s,ae,null,y,E,C),o-1),[]})},At=(s,o,u,d,y)=>{o=rn(o);const E=d===0;let C=B=>B;if(E){var D=32-8*u;C=B=>B<<D>>>D,y=C(y)}Mn(s,{name:o,fromWireType:C,toWireType:(B,re)=>{if(typeof re!="number"&&typeof re!="boolean")throw new TypeError(`Cannot convert "${vi(re)}" to ${o}`);return va(o,re,d,y),re},argPackAdvance:kn,readValueFromPointer:_a(o,u,d!==0),destructorFunction:null})},dn=(s,o,u)=>{var d=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],y=d[o];function E(C){var D=_e[C>>2],B=_e[C+4>>2];return new y(lt.buffer,B,D)}u=rn(u),Mn(s,{name:u,fromWireType:E,argPackAdvance:kn,readValueFromPointer:E},{ignoreDuplicateRegistrations:!0})},Hn=Object.assign({optional:!0},w),ri=(s,o)=>{Mn(s,Hn)},xn=(s,o,u)=>(S(typeof u=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),Ne(s,Qe,o,u)),rl=(s,o)=>{o=rn(o),Mn(s,{name:o,fromWireType(u){for(var d=_e[u>>2],y=u+4,E,C,D=y,C=0;C<=d;++C){var B=y+C;if(C==d||Qe[B]==0){var re=B-D,ae=pt(D,re);E===void 0?E=ae:(E+="\0",E+=ae),D=B+1}}return yi(u),E},toWireType(u,d){d instanceof ArrayBuffer&&(d=new Uint8Array(d));var y,E=typeof d=="string";E||ArrayBuffer.isView(d)&&d.BYTES_PER_ELEMENT==1||Tt("Cannot pass non-string to std::string"),E?y=Se(d):y=d.length;var C=ll(4+y+1),D=C+4;return _e[C>>2]=y,E?xn(d,D,y+1):Qe.set(d,D),u!==null&&u.push(yi,C),C},argPackAdvance:kn,readValueFromPointer:Gr,destructorFunction(u){yi(u)}})},Ra=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,sl=(s,o)=>{S(s%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var u=s>>1,d=u+o/2,y=u;!(y>=d)&&ye[y];)++y;if(y-u>16&&Ra)return Ra.decode(ye.subarray(u,y));for(var E="",C=u;!(C>=d);++C){var D=ye[C];if(D==0)break;E+=String.fromCharCode(D)}return E},Vs=(s,o,u)=>{if(S(o%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),S(typeof u=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),u??=2147483647,u<2)return 0;u-=2;for(var d=o,y=u<s.length*2?u/2:s.length,E=0;E<y;++E){var C=s.charCodeAt(E);de[o>>1]=C,o+=2}return de[o>>1]=0,o-d},Fp=s=>s.length*2,Up=(s,o)=>{S(s%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var u="",d=0;!(d>=o/4);d++){var y=ue[s+d*4>>2];if(!y)break;u+=String.fromCodePoint(y)}return u},Np=(s,o,u)=>{if(S(o%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),S(typeof u=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),u??=2147483647,u<4)return 0;for(var d=o,y=d+u-4,E=0;E<s.length;++E){var C=s.codePointAt(E);if(C>65535&&E++,ue[o>>2]=C,o+=4,o+4>y)break}return ue[o>>2]=0,o-d},Op=s=>{for(var o=0,u=0;u<s.length;++u){var d=s.codePointAt(u);d>65535&&u++,o+=4}return o},kp=(s,o,u)=>{u=rn(u);var d,y,E,C;o===2?(d=sl,y=Vs,C=Fp,E=D=>ye[D>>1]):o===4&&(d=Up,y=Np,C=Op,E=D=>_e[D>>2]),Mn(s,{name:u,fromWireType:D=>{for(var B=_e[D>>2],re,ae=D+4,ve=0;ve<=B;++ve){var xe=D+4+ve*o;if(ve==B||E(xe)==0){var ge=xe-ae,be=d(ae,ge);re===void 0?re=be:(re+="\0",re+=be),ae=xe+o}}return yi(D),re},toWireType:(D,B)=>{typeof B!="string"&&Tt(`Cannot pass non-string to C++ string type ${u}`);var re=C(B),ae=ll(4+re+o);return _e[ae>>2]=re/o,y(B,ae+4,re+o),D!==null&&D.push(yi,ae),ae},argPackAdvance:kn,readValueFromPointer:Gr,destructorFunction(D){yi(D)}})},Bp=(s,o)=>{P(s)},zp=(s,o)=>{o=rn(o),Mn(s,{isVoid:!0,name:o,argPackAdvance:0,fromWireType:()=>{},toWireType:(u,d)=>{}})},Hp=()=>{throw new O},Gu=(s,o,u)=>{var d=[],y=s.toWireType(d,u);return d.length&&(_e[o>>2]=tn.toHandle(d)),y},Vp=(s,o,u)=>(s=tn.toValue(s),o=q(o,"emval::as"),Gu(o,u,s)),Ca=[],Gp=(s,o,u,d)=>(s=Ca[s],o=tn.toValue(o),s(null,o,u,d)),Wp={},al=s=>{var o=Wp[s];return o===void 0?rn(s):o},$p=(s,o,u,d,y)=>(s=Ca[s],o=tn.toValue(o),u=al(u),s(o,o[u],d,y)),Wu=()=>globalThis,jp=s=>s===0?tn.toHandle(Wu()):(s=al(s),tn.toHandle(Wu()[s])),Xp=s=>{var o=Ca.length;return Ca.push(s),o},qp=(s,o)=>{for(var u=new Array(s),d=0;d<s;++d)u[d]=q(_e[o+d*4>>2],`parameter ${d}`);return u},Yp=(s,o,u)=>{var d=qp(s,o),y=d.shift();s--;var E=`return function (obj, func, destructorsRef, args) {
`,C=0,D=[];u===0&&D.push("obj");for(var B=["retType"],re=[y],ae=0;ae<s;++ae)D.push(`arg${ae}`),B.push(`argType${ae}`),re.push(d[ae]),E+=`  var arg${ae} = argType${ae}.readValueFromPointer(args${C?"+"+C:""});
`,C+=d[ae].argPackAdvance;var ve=u===1?"new func":"func.call";E+=`  var rv = ${ve}(${D.join(", ")});
`,y.isVoid||(B.push("emval_returnValue"),re.push(Gu),E+=`  return emval_returnValue(retType, destructorsRef, rv);
`),E+=`};
`;var xe=new Function(...B,E)(...re),ge=`methodCaller<(${d.map(be=>be.name).join(", ")}) => ${y.name}>`;return Xp(Bn(ge,xe))},Kp=(s,o)=>(s=tn.toValue(s),o=tn.toValue(o),tn.toHandle(s[o])),Zp=s=>{s>9&&(Kn[s+1]+=1)},Jp=s=>(s=tn.toValue(s),typeof s=="number"),Qp=s=>(s=tn.toValue(s),typeof s=="string"),em=()=>tn.toHandle([]),tm=s=>tn.toHandle(al(s)),nm=s=>{var o=tn.toValue(s);Bs(o),Hs(s)},im=(s,o)=>{s=q(s,"_emval_take_value");var u=s.readValueFromPointer(o);return tn.toHandle(u)},rm=s=>{throw s=tn.toValue(s),s},sm=s=>s%4===0&&(s%100!==0||s%400===0),am=[0,31,60,91,121,152,182,213,244,274,305,335],om=[0,31,59,90,120,151,181,212,243,273,304,334],$u=s=>{var o=sm(s.getFullYear()),u=o?am:om,d=u[s.getMonth()]+s.getDate()-1;return d},lm=9007199254740992,cm=-9007199254740992,ju=s=>s<cm||s>lm?NaN:Number(s);function um(s,o){s=ju(s);var u=new Date(s*1e3);ue[o>>2]=u.getSeconds(),ue[o+4>>2]=u.getMinutes(),ue[o+8>>2]=u.getHours(),ue[o+12>>2]=u.getDate(),ue[o+16>>2]=u.getMonth(),ue[o+20>>2]=u.getFullYear()-1900,ue[o+24>>2]=u.getDay();var d=$u(u)|0;ue[o+28>>2]=d,ue[o+36>>2]=-(u.getTimezoneOffset()*60);var y=new Date(u.getFullYear(),0,1),E=new Date(u.getFullYear(),6,1).getTimezoneOffset(),C=y.getTimezoneOffset(),D=(E!=C&&u.getTimezoneOffset()==Math.min(C,E))|0;ue[o+32>>2]=D}var hm=function(s){var o=(()=>{var u=new Date(ue[s+20>>2]+1900,ue[s+16>>2],ue[s+12>>2],ue[s+8>>2],ue[s+4>>2],ue[s>>2],0),d=ue[s+32>>2],y=u.getTimezoneOffset(),E=new Date(u.getFullYear(),0,1),C=new Date(u.getFullYear(),6,1).getTimezoneOffset(),D=E.getTimezoneOffset(),B=Math.min(D,C);if(d<0)ue[s+32>>2]=+(C!=D&&B==y);else if(d>0!=(B==y)){var re=Math.max(D,C),ae=d>0?B:re;u.setTime(u.getTime()+(ae-y)*6e4)}ue[s+24>>2]=u.getDay();var ve=$u(u)|0;ue[s+28>>2]=ve,ue[s>>2]=u.getSeconds(),ue[s+4>>2]=u.getMinutes(),ue[s+8>>2]=u.getHours(),ue[s+12>>2]=u.getDate(),ue[s+16>>2]=u.getMonth(),ue[s+20>>2]=u.getYear();var xe=u.getTime();return isNaN(xe)?-1:xe/1e3})();return BigInt(o)},fm=(s,o,u,d)=>{var y=new Date().getFullYear(),E=new Date(y,0,1),C=new Date(y,6,1),D=E.getTimezoneOffset(),B=C.getTimezoneOffset(),re=Math.max(D,B);_e[s>>2]=re*60,ue[o>>2]=+(D!=B);var ae=ge=>{var be=ge>=0?"-":"+",it=Math.abs(ge),Lt=String(Math.floor(it/60)).padStart(2,"0"),xt=String(it%60).padStart(2,"0");return`UTC${be}${Lt}${xt}`},ve=ae(D),xe=ae(B);S(ve),S(xe),S(Se(ve)<=16,`timezone name truncated to fit in TZNAME_MAX (${ve})`),S(Se(xe)<=16,`timezone name truncated to fit in TZNAME_MAX (${xe})`),B<D?(xn(ve,u,17),xn(xe,d,17)):(xn(ve,d,17),xn(xe,u,17))},Xu=()=>performance.now(),qu=()=>Date.now(),dm=s=>s>=0&&s<=3;function pm(s,o,u){if(!dm(s))return 28;var d;s===0?d=qu():d=Xu();var y=Math.round(d*1e3*1e3);return Nt[u>>3]=BigInt(y),0}var Pa=[],mm=(s,o)=>{S(Array.isArray(Pa)),S(o%16==0),Pa.length=0;for(var u;u=Qe[s++];){var d=String.fromCharCode(u),y=["d","f","i","p"];y.push("j"),S(y.includes(d),`Invalid character ${u}("${d}") in readEmAsmArgs! Use only [${y}], and do not specify "v" for void return argument.`);var E=u!=105;E&=u!=112,o+=E&&o%8?4:0,Pa.push(u==112?_e[o>>2]:u==106?Nt[o>>3]:u==105?ue[o>>2]:dt[o>>3]),o+=E?8:4}return Pa},gm=(s,o,u)=>{var d=mm(o,u);return S(eh.hasOwnProperty(s),`No EM_ASM constant found at address ${s}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),eh[s](...d)},_m=(s,o,u)=>gm(s,o,u),Yu=()=>2147483648,vm=()=>Yu(),ym=(s,o)=>(S(o,"alignment argument is required"),Math.ceil(s/o)*o),xm=s=>{var o=Et.buffer,u=(s-o.byteLength+65535)/65536|0;try{return Et.grow(u),rt(),1}catch(d){I(`growMemory: Attempted to grow heap from ${o.byteLength} bytes to ${s} bytes, but got error: ${d}`)}},wm=s=>{var o=Qe.length;s>>>=0,S(s>o);var u=Yu();if(s>u)return I(`Cannot enlarge memory, requested ${s} bytes, but the limit is ${u} bytes!`),!1;for(var d=1;d<=4;d*=2){var y=o*(1+.2/d);y=Math.min(y,s+100663296);var E=Math.min(u,ym(Math.max(s,y),65536)),C=xm(E);if(C)return!0}return I(`Failed to grow the heap from ${o} bytes to ${E} bytes, not enough memory!`),!1},ol={},Em=()=>f||"./this.program",Gs=()=>{if(!Gs.strings){var s=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",o={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:s,_:Em()};for(var u in ol)ol[u]===void 0?delete o[u]:o[u]=ol[u];var d=[];for(var u in o)d.push(`${u}=${o[u]}`);Gs.strings=d}return Gs.strings},bm=(s,o)=>{var u=0,d=0;for(var y of Gs()){var E=o+u;_e[s+d>>2]=E,u+=xn(y,E,1/0)+1,d+=4}return 0},Sm=(s,o)=>{var u=Gs();_e[s>>2]=u.length;var d=0;for(var y of u)d+=Se(y)+1;return _e[o>>2]=d,0},Ku=0,Zu=()=>Fe||Ku>0,Mm=s=>{Zu()||(t.onExit?.(s),V=!0),h(s,new tt(s))},Tm=(s,o)=>{if(U_(),Zu()&&!o){var u=`program exited (with status: ${s}), but keepRuntimeAlive() is set (counter=${Ku}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;at?.(u),I(u)}Mm(s)},Am=Tm;function Rm(s){try{var o=Ot.getStreamFromFD(s);return M.close(o),0}catch(u){if(typeof M>"u"||u.name!=="ErrnoError")throw u;return u.errno}}var Cm=(s,o,u,d)=>{for(var y=0,E=0;E<u;E++){var C=_e[o>>2],D=_e[o+4>>2];o+=8;var B=M.read(s,lt,C,D,d);if(B<0)return-1;if(y+=B,B<D)break}return y};function Pm(s,o,u,d){try{var y=Ot.getStreamFromFD(s),E=Cm(y,o,u);return _e[d>>2]=E,0}catch(C){if(typeof M>"u"||C.name!=="ErrnoError")throw C;return C.errno}}function Dm(s,o,u,d){o=ju(o);try{if(isNaN(o))return 61;var y=Ot.getStreamFromFD(s);return M.llseek(y,o,u),Nt[d>>3]=BigInt(y.position),y.getdents&&o===0&&u===0&&(y.getdents=null),0}catch(E){if(typeof M>"u"||E.name!=="ErrnoError")throw E;return E.errno}}var Lm=(s,o,u,d)=>{for(var y=0,E=0;E<u;E++){var C=_e[o>>2],D=_e[o+4>>2];o+=8;var B=M.write(s,lt,C,D,d);if(B<0)return-1;if(y+=B,B<D)break}return y};function Im(s,o,u,d){try{var y=Ot.getStreamFromFD(s),E=Lm(y,o,u);return _e[d>>2]=E,0}catch(C){if(typeof M>"u"||C.name!=="ErrnoError")throw C;return C.errno}}var Fm=s=>s,Um=s=>{var o=t["_"+s];return S(o,"Cannot call unknown function "+s+", make sure it is exported"),o},Nm=(s,o)=>{S(s.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),lt.set(s,o)},Da=s=>ah(s),Om=s=>{var o=Se(s)+1,u=Da(o);return xn(s,u,o),u},Ju=(s,o,u,d,y)=>{var E={string:be=>{var it=0;return be!=null&&be!==0&&(it=Om(be)),it},array:be=>{var it=Da(be.length);return Nm(be,it),it}};function C(be){return o==="string"?pt(be):o==="boolean"?!!be:be}var D=Um(s),B=[],re=0;if(S(o!=="array",'Return type should not be "array".'),d)for(var ae=0;ae<d.length;ae++){var ve=E[u[ae]];ve?(re===0&&(re=j()),B[ae]=ve(d[ae])):B[ae]=d[ae]}var xe=D(...B);function ge(be){return re!==0&&J(re),C(be)}return xe=ge(xe),xe},km=(s,o,u,d)=>(...y)=>Ju(s,o,u,y),Bm=(...s)=>M.createPath(...s),zm=(...s)=>M.unlink(...s),Hm=(...s)=>M.createLazyFile(...s),Vm=(...s)=>M.createDevice(...s),Gm=s=>La(s),Wm=s=>hl(s),$m=s=>{var o=j(),u=Da(4),d=Da(4);lh(s,u,d);var y=_e[u>>2],E=_e[d>>2],C=pt(y);yi(y);var D;return E&&(D=pt(E),yi(E)),J(o),[C,D]},Qu=s=>$m(s);M.createPreloadedFile=Ze,M.staticInit(),wa(),Xo(),S(Kn.length===10),t.noExitRuntime&&(Fe=t.noExitRuntime),t.preloadPlugins&&(Bt=t.preloadPlugins),t.print&&(U=t.print),t.printErr&&(I=t.printErr),t.wasmBinary&&(F=t.wasmBinary),qm(),t.arguments&&t.arguments,t.thisProgram&&(f=t.thisProgram),S(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),S(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),S(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),S(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),S(typeof t.read>"u","Module.read option was removed"),S(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),S(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),S(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),S(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),S(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),S(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),S(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),S(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=k,t.removeRunDependency=R,t.ccall=Ju,t.cwrap=km,t.FS_createPreloadedFile=Ze,t.FS_unlink=zm,t.FS_createPath=Bm,t.FS_createDevice=Vm,t.FS=M,t.FS_createDataFile=Rt,t.FS_createLazyFile=Hm,t.MEMFS=Me;var jm=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];jm.forEach(Ee);var Xm=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];Xm.forEach(De),t.incrementExceptionRefcount=Gm,t.decrementExceptionRefcount=Wm,t.getExceptionMessage=Qu;function qm(){$("fetchSettings")}var eh={638388:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(s){Object.defineProperty(t,s,{get:function(){return t["get_"+s]()},set:function(o){},enumerable:!0,configurable:!0})})}},th=Z("___getTypeName"),ll=Z("_malloc"),cl=Z("_fflush"),yi=Z("_free"),ul=Z("_emscripten_stack_get_end"),nh=Z("_strerror"),Ce=Z("_setThrew"),ih=Z("__emscripten_tempret_set"),rh=Z("_emscripten_stack_init"),sh=Z("__emscripten_stack_restore"),ah=Z("__emscripten_stack_alloc"),oh=Z("_emscripten_stack_get_current"),hl=Z("___cxa_decrement_exception_refcount"),La=Z("___cxa_increment_exception_refcount"),lh=Z("___get_exception_message"),ch=Z("___cxa_can_catch"),uh=Z("___cxa_get_exception_ptr");function Ym(s){th=fe("__getTypeName",1),ll=fe("malloc",1),cl=fe("fflush",1),yi=fe("free",1),ul=s.emscripten_stack_get_end,s.emscripten_stack_get_base,nh=fe("strerror",1),Ce=fe("setThrew",2),ih=fe("_emscripten_tempret_set",1),rh=s.emscripten_stack_init,s.emscripten_stack_get_free,sh=s._emscripten_stack_restore,ah=s._emscripten_stack_alloc,oh=s.emscripten_stack_get_current,hl=fe("__cxa_decrement_exception_refcount",1),La=fe("__cxa_increment_exception_refcount",1),lh=fe("__get_exception_message",3),ch=fe("__cxa_can_catch",3),uh=fe("__cxa_get_exception_ptr",1)}var hh={__assert_fail:In,__cxa_begin_catch:jn,__cxa_current_primary_exception:Ni,__cxa_end_catch:ir,__cxa_find_matching_catch_2:rr,__cxa_find_matching_catch_3:Ur,__cxa_find_matching_catch_4:Cs,__cxa_rethrow:Oi,__cxa_rethrow_primary_exception:Ps,__cxa_throw:sr,__cxa_uncaught_exceptions:ki,__resumeException:Ds,__syscall_dup3:qt,__syscall_fcntl64:Qt,__syscall_fstat64:ln,__syscall_ioctl:mi,__syscall_lstat64:qn,__syscall_newfstatat:Oo,__syscall_openat:Nr,__syscall_stat64:ko,_abort_js:Bo,_embind_register_bigint:Or,_embind_register_bool:ya,_embind_register_class:Yo,_embind_register_class_class_function:Qo,_embind_register_class_constructor:el,_embind_register_class_function:tl,_embind_register_class_property:nl,_embind_register_constant:il,_embind_register_emval:P,_embind_register_enum:z,_embind_register_enum_value:le,_embind_register_float:Je,_embind_register_function:_t,_embind_register_integer:At,_embind_register_memory_view:dn,_embind_register_optional:ri,_embind_register_std_string:rl,_embind_register_std_wstring:kp,_embind_register_user_type:Bp,_embind_register_void:zp,_emscripten_throw_longjmp:Hp,_emval_as:Vp,_emval_call:Gp,_emval_call_method:$p,_emval_decref:Hs,_emval_get_global:jp,_emval_get_method_caller:Yp,_emval_get_property:Kp,_emval_incref:Zp,_emval_is_number:Jp,_emval_is_string:Qp,_emval_new_array:em,_emval_new_cstring:tm,_emval_run_destructors:nm,_emval_take_value:im,_emval_throw:rm,_localtime_js:um,_mktime_js:hm,_tzset_js:fm,clock_time_get:pm,emscripten_asm_const_int:_m,emscripten_date_now:qu,emscripten_get_heap_max:vm,emscripten_get_now:Xu,emscripten_resize_heap:wm,environ_get:bm,environ_sizes_get:Sm,exit:Am,fd_close:Rm,fd_read:Pm,fd_seek:Dm,fd_write:Im,invoke_ddd:x_,invoke_dddi:kg,invoke_dddidi:Bg,invoke_ddidi:Og,invoke_di:zg,invoke_dii:Rg,invoke_diii:cg,invoke_diiii:Ng,invoke_diiiidd:Fg,invoke_diiiidi:fg,invoke_diiiii:rg,invoke_diiiiii:vg,invoke_diiiiiii:Hg,invoke_diiiiiiiii:gg,invoke_diiiiiiiiiiii:_g,invoke_fiii:D_,invoke_i:sg,invoke_id:m_,invoke_ii:Jm,invoke_iid:Kg,invoke_iidddd:M_,invoke_iidiii:Tg,invoke_iidiiid:Sg,invoke_iif:S_,invoke_iii:Km,invoke_iiid:Ag,invoke_iiididdddddd:Mg,invoke_iiidiiiiiiii:bg,invoke_iiii:tg,invoke_iiiidddiiiii:Gg,invoke_iiiii:lg,invoke_iiiiid:a_,invoke_iiiiii:t_,invoke_iiiiiii:Jg,invoke_iiiiiiii:Yg,invoke_iiiiiiiidd:o_,invoke_iiiiiiiii:Ig,invoke_iiiiiiiiii:Qg,invoke_iiiiiiiiiidddiiiiiiiii:Eg,invoke_iiiiiiiiiii:P_,invoke_iiiiiiiiiiii:L_,invoke_iiiiiiiiiiiii:p_,invoke_iiij:e_,invoke_iiji:s_,invoke_j:R_,invoke_ji:d_,invoke_jiiii:n_,invoke_jij:f_,invoke_v:eg,invoke_vi:Qm,invoke_vid:Zg,invoke_viddd:i_,invoke_vidddd:r_,invoke_vidi:Ug,invoke_vidiii:xg,invoke_vii:ig,invoke_viid:Dg,invoke_viiddi:h_,invoke_viiddidi:u_,invoke_viiddii:Vg,invoke_viidi:Pg,invoke_viidii:hg,invoke_viidiii:qg,invoke_viidiiid:jg,invoke_viidiiiii:wg,invoke_viidiiiiiiii:yg,invoke_viii:Zm,invoke_viiid:pg,invoke_viiidd:c_,invoke_viiidi:Cg,invoke_viiididdddddd:Xg,invoke_viiidiiiiiiii:$g,invoke_viiii:og,invoke_viiiiddd:l_,invoke_viiiidi:w_,invoke_viiiifi:E_,invoke_viiiii:ng,invoke_viiiiid:dg,invoke_viiiiii:ag,invoke_viiiiiii:ug,invoke_viiiiiiii:Lg,invoke_viiiiiiiiii:v_,invoke_viiiiiiiiiidddiiiiiiiii:Wg,invoke_viiiiiiiiiiid:mg,invoke_viiiiiiiiiiiii:__,invoke_viiiiiiiiiiiiiii:I_,invoke_viiiiiiiiiiiiiiiiii:y_,invoke_viiiij:T_,invoke_viij:A_,invoke_viijii:C_,invoke_vij:b_,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:g_,llvm_eh_typeid_for:Fm},ur=await Oe();function Km(s,o,u){var d=j();try{return Te(s)(o,u)}catch(y){if(J(d),!(y instanceof A))throw y;Ce(1,0)}}function Zm(s,o,u,d){var y=j();try{Te(s)(o,u,d)}catch(E){if(J(y),!(E instanceof A))throw E;Ce(1,0)}}function Jm(s,o){var u=j();try{return Te(s)(o)}catch(d){if(J(u),!(d instanceof A))throw d;Ce(1,0)}}function Qm(s,o){var u=j();try{Te(s)(o)}catch(d){if(J(u),!(d instanceof A))throw d;Ce(1,0)}}function eg(s){var o=j();try{Te(s)()}catch(u){if(J(o),!(u instanceof A))throw u;Ce(1,0)}}function tg(s,o,u,d){var y=j();try{return Te(s)(o,u,d)}catch(E){if(J(y),!(E instanceof A))throw E;Ce(1,0)}}function ng(s,o,u,d,y,E){var C=j();try{Te(s)(o,u,d,y,E)}catch(D){if(J(C),!(D instanceof A))throw D;Ce(1,0)}}function ig(s,o,u){var d=j();try{Te(s)(o,u)}catch(y){if(J(d),!(y instanceof A))throw y;Ce(1,0)}}function rg(s,o,u,d,y,E){var C=j();try{return Te(s)(o,u,d,y,E)}catch(D){if(J(C),!(D instanceof A))throw D;Ce(1,0)}}function sg(s){var o=j();try{return Te(s)()}catch(u){if(J(o),!(u instanceof A))throw u;Ce(1,0)}}function ag(s,o,u,d,y,E,C){var D=j();try{Te(s)(o,u,d,y,E,C)}catch(B){if(J(D),!(B instanceof A))throw B;Ce(1,0)}}function og(s,o,u,d,y){var E=j();try{Te(s)(o,u,d,y)}catch(C){if(J(E),!(C instanceof A))throw C;Ce(1,0)}}function lg(s,o,u,d,y){var E=j();try{return Te(s)(o,u,d,y)}catch(C){if(J(E),!(C instanceof A))throw C;Ce(1,0)}}function cg(s,o,u,d){var y=j();try{return Te(s)(o,u,d)}catch(E){if(J(y),!(E instanceof A))throw E;Ce(1,0)}}function ug(s,o,u,d,y,E,C,D){var B=j();try{Te(s)(o,u,d,y,E,C,D)}catch(re){if(J(B),!(re instanceof A))throw re;Ce(1,0)}}function hg(s,o,u,d,y,E){var C=j();try{Te(s)(o,u,d,y,E)}catch(D){if(J(C),!(D instanceof A))throw D;Ce(1,0)}}function fg(s,o,u,d,y,E,C){var D=j();try{return Te(s)(o,u,d,y,E,C)}catch(B){if(J(D),!(B instanceof A))throw B;Ce(1,0)}}function dg(s,o,u,d,y,E,C){var D=j();try{Te(s)(o,u,d,y,E,C)}catch(B){if(J(D),!(B instanceof A))throw B;Ce(1,0)}}function pg(s,o,u,d,y){var E=j();try{Te(s)(o,u,d,y)}catch(C){if(J(E),!(C instanceof A))throw C;Ce(1,0)}}function mg(s,o,u,d,y,E,C,D,B,re,ae,ve,xe){var ge=j();try{Te(s)(o,u,d,y,E,C,D,B,re,ae,ve,xe)}catch(be){if(J(ge),!(be instanceof A))throw be;Ce(1,0)}}function gg(s,o,u,d,y,E,C,D,B,re){var ae=j();try{return Te(s)(o,u,d,y,E,C,D,B,re)}catch(ve){if(J(ae),!(ve instanceof A))throw ve;Ce(1,0)}}function _g(s,o,u,d,y,E,C,D,B,re,ae,ve,xe){var ge=j();try{return Te(s)(o,u,d,y,E,C,D,B,re,ae,ve,xe)}catch(be){if(J(ge),!(be instanceof A))throw be;Ce(1,0)}}function vg(s,o,u,d,y,E,C){var D=j();try{return Te(s)(o,u,d,y,E,C)}catch(B){if(J(D),!(B instanceof A))throw B;Ce(1,0)}}function yg(s,o,u,d,y,E,C,D,B,re,ae,ve){var xe=j();try{Te(s)(o,u,d,y,E,C,D,B,re,ae,ve)}catch(ge){if(J(xe),!(ge instanceof A))throw ge;Ce(1,0)}}function xg(s,o,u,d,y,E){var C=j();try{Te(s)(o,u,d,y,E)}catch(D){if(J(C),!(D instanceof A))throw D;Ce(1,0)}}function wg(s,o,u,d,y,E,C,D,B){var re=j();try{Te(s)(o,u,d,y,E,C,D,B)}catch(ae){if(J(re),!(ae instanceof A))throw ae;Ce(1,0)}}function Eg(s,o,u,d,y,E,C,D,B,re,ae,ve,xe,ge,be,it,Lt,xt,Zt,It,wn,pn){var Tn=j();try{return Te(s)(o,u,d,y,E,C,D,B,re,ae,ve,xe,ge,be,it,Lt,xt,Zt,It,wn,pn)}catch(Vt){if(J(Tn),!(Vt instanceof A))throw Vt;Ce(1,0)}}function bg(s,o,u,d,y,E,C,D,B,re,ae,ve){var xe=j();try{return Te(s)(o,u,d,y,E,C,D,B,re,ae,ve)}catch(ge){if(J(xe),!(ge instanceof A))throw ge;Ce(1,0)}}function Sg(s,o,u,d,y,E,C){var D=j();try{return Te(s)(o,u,d,y,E,C)}catch(B){if(J(D),!(B instanceof A))throw B;Ce(1,0)}}function Mg(s,o,u,d,y,E,C,D,B,re,ae,ve){var xe=j();try{return Te(s)(o,u,d,y,E,C,D,B,re,ae,ve)}catch(ge){if(J(xe),!(ge instanceof A))throw ge;Ce(1,0)}}function Tg(s,o,u,d,y,E){var C=j();try{return Te(s)(o,u,d,y,E)}catch(D){if(J(C),!(D instanceof A))throw D;Ce(1,0)}}function Ag(s,o,u,d){var y=j();try{return Te(s)(o,u,d)}catch(E){if(J(y),!(E instanceof A))throw E;Ce(1,0)}}function Rg(s,o,u){var d=j();try{return Te(s)(o,u)}catch(y){if(J(d),!(y instanceof A))throw y;Ce(1,0)}}function Cg(s,o,u,d,y,E){var C=j();try{Te(s)(o,u,d,y,E)}catch(D){if(J(C),!(D instanceof A))throw D;Ce(1,0)}}function Pg(s,o,u,d,y){var E=j();try{Te(s)(o,u,d,y)}catch(C){if(J(E),!(C instanceof A))throw C;Ce(1,0)}}function Dg(s,o,u,d){var y=j();try{Te(s)(o,u,d)}catch(E){if(J(y),!(E instanceof A))throw E;Ce(1,0)}}function Lg(s,o,u,d,y,E,C,D,B){var re=j();try{Te(s)(o,u,d,y,E,C,D,B)}catch(ae){if(J(re),!(ae instanceof A))throw ae;Ce(1,0)}}function Ig(s,o,u,d,y,E,C,D,B){var re=j();try{return Te(s)(o,u,d,y,E,C,D,B)}catch(ae){if(J(re),!(ae instanceof A))throw ae;Ce(1,0)}}function Fg(s,o,u,d,y,E,C){var D=j();try{return Te(s)(o,u,d,y,E,C)}catch(B){if(J(D),!(B instanceof A))throw B;Ce(1,0)}}function Ug(s,o,u,d){var y=j();try{Te(s)(o,u,d)}catch(E){if(J(y),!(E instanceof A))throw E;Ce(1,0)}}function Ng(s,o,u,d,y){var E=j();try{return Te(s)(o,u,d,y)}catch(C){if(J(E),!(C instanceof A))throw C;Ce(1,0)}}function Og(s,o,u,d,y){var E=j();try{return Te(s)(o,u,d,y)}catch(C){if(J(E),!(C instanceof A))throw C;Ce(1,0)}}function kg(s,o,u,d){var y=j();try{return Te(s)(o,u,d)}catch(E){if(J(y),!(E instanceof A))throw E;Ce(1,0)}}function Bg(s,o,u,d,y,E){var C=j();try{return Te(s)(o,u,d,y,E)}catch(D){if(J(C),!(D instanceof A))throw D;Ce(1,0)}}function zg(s,o){var u=j();try{return Te(s)(o)}catch(d){if(J(u),!(d instanceof A))throw d;Ce(1,0)}}function Hg(s,o,u,d,y,E,C,D){var B=j();try{return Te(s)(o,u,d,y,E,C,D)}catch(re){if(J(B),!(re instanceof A))throw re;Ce(1,0)}}function Vg(s,o,u,d,y,E,C){var D=j();try{Te(s)(o,u,d,y,E,C)}catch(B){if(J(D),!(B instanceof A))throw B;Ce(1,0)}}function Gg(s,o,u,d,y,E,C,D,B,re,ae,ve){var xe=j();try{return Te(s)(o,u,d,y,E,C,D,B,re,ae,ve)}catch(ge){if(J(xe),!(ge instanceof A))throw ge;Ce(1,0)}}function Wg(s,o,u,d,y,E,C,D,B,re,ae,ve,xe,ge,be,it,Lt,xt,Zt,It,wn,pn,Tn){var Vt=j();try{Te(s)(o,u,d,y,E,C,D,B,re,ae,ve,xe,ge,be,it,Lt,xt,Zt,It,wn,pn,Tn)}catch(hr){if(J(Vt),!(hr instanceof A))throw hr;Ce(1,0)}}function $g(s,o,u,d,y,E,C,D,B,re,ae,ve,xe){var ge=j();try{Te(s)(o,u,d,y,E,C,D,B,re,ae,ve,xe)}catch(be){if(J(ge),!(be instanceof A))throw be;Ce(1,0)}}function jg(s,o,u,d,y,E,C,D){var B=j();try{Te(s)(o,u,d,y,E,C,D)}catch(re){if(J(B),!(re instanceof A))throw re;Ce(1,0)}}function Xg(s,o,u,d,y,E,C,D,B,re,ae,ve,xe){var ge=j();try{Te(s)(o,u,d,y,E,C,D,B,re,ae,ve,xe)}catch(be){if(J(ge),!(be instanceof A))throw be;Ce(1,0)}}function qg(s,o,u,d,y,E,C){var D=j();try{Te(s)(o,u,d,y,E,C)}catch(B){if(J(D),!(B instanceof A))throw B;Ce(1,0)}}function Yg(s,o,u,d,y,E,C,D){var B=j();try{return Te(s)(o,u,d,y,E,C,D)}catch(re){if(J(B),!(re instanceof A))throw re;Ce(1,0)}}function Kg(s,o,u){var d=j();try{return Te(s)(o,u)}catch(y){if(J(d),!(y instanceof A))throw y;Ce(1,0)}}function Zg(s,o,u){var d=j();try{Te(s)(o,u)}catch(y){if(J(d),!(y instanceof A))throw y;Ce(1,0)}}function Jg(s,o,u,d,y,E,C){var D=j();try{return Te(s)(o,u,d,y,E,C)}catch(B){if(J(D),!(B instanceof A))throw B;Ce(1,0)}}function Qg(s,o,u,d,y,E,C,D,B,re){var ae=j();try{return Te(s)(o,u,d,y,E,C,D,B,re)}catch(ve){if(J(ae),!(ve instanceof A))throw ve;Ce(1,0)}}function e_(s,o,u,d){var y=j();try{return Te(s)(o,u,d)}catch(E){if(J(y),!(E instanceof A))throw E;Ce(1,0)}}function t_(s,o,u,d,y,E){var C=j();try{return Te(s)(o,u,d,y,E)}catch(D){if(J(C),!(D instanceof A))throw D;Ce(1,0)}}function n_(s,o,u,d,y){var E=j();try{return Te(s)(o,u,d,y)}catch(C){if(J(E),!(C instanceof A))throw C;return Ce(1,0),0n}}function i_(s,o,u,d,y){var E=j();try{Te(s)(o,u,d,y)}catch(C){if(J(E),!(C instanceof A))throw C;Ce(1,0)}}function r_(s,o,u,d,y,E){var C=j();try{Te(s)(o,u,d,y,E)}catch(D){if(J(C),!(D instanceof A))throw D;Ce(1,0)}}function s_(s,o,u,d){var y=j();try{return Te(s)(o,u,d)}catch(E){if(J(y),!(E instanceof A))throw E;Ce(1,0)}}function a_(s,o,u,d,y,E){var C=j();try{return Te(s)(o,u,d,y,E)}catch(D){if(J(C),!(D instanceof A))throw D;Ce(1,0)}}function o_(s,o,u,d,y,E,C,D,B,re){var ae=j();try{return Te(s)(o,u,d,y,E,C,D,B,re)}catch(ve){if(J(ae),!(ve instanceof A))throw ve;Ce(1,0)}}function l_(s,o,u,d,y,E,C,D){var B=j();try{Te(s)(o,u,d,y,E,C,D)}catch(re){if(J(B),!(re instanceof A))throw re;Ce(1,0)}}function c_(s,o,u,d,y,E){var C=j();try{Te(s)(o,u,d,y,E)}catch(D){if(J(C),!(D instanceof A))throw D;Ce(1,0)}}function u_(s,o,u,d,y,E,C,D){var B=j();try{Te(s)(o,u,d,y,E,C,D)}catch(re){if(J(B),!(re instanceof A))throw re;Ce(1,0)}}function h_(s,o,u,d,y,E){var C=j();try{Te(s)(o,u,d,y,E)}catch(D){if(J(C),!(D instanceof A))throw D;Ce(1,0)}}function f_(s,o,u){var d=j();try{return Te(s)(o,u)}catch(y){if(J(d),!(y instanceof A))throw y;return Ce(1,0),0n}}function d_(s,o){var u=j();try{return Te(s)(o)}catch(d){if(J(u),!(d instanceof A))throw d;return Ce(1,0),0n}}function p_(s,o,u,d,y,E,C,D,B,re,ae,ve,xe){var ge=j();try{return Te(s)(o,u,d,y,E,C,D,B,re,ae,ve,xe)}catch(be){if(J(ge),!(be instanceof A))throw be;Ce(1,0)}}function m_(s,o){var u=j();try{return Te(s)(o)}catch(d){if(J(u),!(d instanceof A))throw d;Ce(1,0)}}function g_(s,o,u,d,y,E,C,D,B,re,ae,ve,xe,ge,be,it,Lt,xt,Zt,It,wn,pn,Tn,Vt,hr,O_,k_,B_,z_,H_,V_,G_,W_,$_,j_,X_,q_,Y_,K_,Z_,J_,Q_,ev,tv,nv,iv,rv,sv,av,ov,lv,cv,uv,hv,fv,dv,pv,mv,gv,_v,vv,yv,xv,wv,Ev,bv,Sv,Mv,Tv,Av,Rv,Cv,Pv,Dv,Lv,Iv,Fv,Uv,Nv,Ov,kv,Bv,zv,Hv,Vv,Gv){var Wv=j();try{Te(s)(o,u,d,y,E,C,D,B,re,ae,ve,xe,ge,be,it,Lt,xt,Zt,It,wn,pn,Tn,Vt,hr,O_,k_,B_,z_,H_,V_,G_,W_,$_,j_,X_,q_,Y_,K_,Z_,J_,Q_,ev,tv,nv,iv,rv,sv,av,ov,lv,cv,uv,hv,fv,dv,pv,mv,gv,_v,vv,yv,xv,wv,Ev,bv,Sv,Mv,Tv,Av,Rv,Cv,Pv,Dv,Lv,Iv,Fv,Uv,Nv,Ov,kv,Bv,zv,Hv,Vv,Gv)}catch(dh){if(J(Wv),!(dh instanceof A))throw dh;Ce(1,0)}}function __(s,o,u,d,y,E,C,D,B,re,ae,ve,xe,ge){var be=j();try{Te(s)(o,u,d,y,E,C,D,B,re,ae,ve,xe,ge)}catch(it){if(J(be),!(it instanceof A))throw it;Ce(1,0)}}function v_(s,o,u,d,y,E,C,D,B,re,ae){var ve=j();try{Te(s)(o,u,d,y,E,C,D,B,re,ae)}catch(xe){if(J(ve),!(xe instanceof A))throw xe;Ce(1,0)}}function y_(s,o,u,d,y,E,C,D,B,re,ae,ve,xe,ge,be,it,Lt,xt,Zt){var It=j();try{Te(s)(o,u,d,y,E,C,D,B,re,ae,ve,xe,ge,be,it,Lt,xt,Zt)}catch(wn){if(J(It),!(wn instanceof A))throw wn;Ce(1,0)}}function x_(s,o,u){var d=j();try{return Te(s)(o,u)}catch(y){if(J(d),!(y instanceof A))throw y;Ce(1,0)}}function w_(s,o,u,d,y,E,C){var D=j();try{Te(s)(o,u,d,y,E,C)}catch(B){if(J(D),!(B instanceof A))throw B;Ce(1,0)}}function E_(s,o,u,d,y,E,C){var D=j();try{Te(s)(o,u,d,y,E,C)}catch(B){if(J(D),!(B instanceof A))throw B;Ce(1,0)}}function b_(s,o,u){var d=j();try{Te(s)(o,u)}catch(y){if(J(d),!(y instanceof A))throw y;Ce(1,0)}}function S_(s,o,u){var d=j();try{return Te(s)(o,u)}catch(y){if(J(d),!(y instanceof A))throw y;Ce(1,0)}}function M_(s,o,u,d,y,E){var C=j();try{return Te(s)(o,u,d,y,E)}catch(D){if(J(C),!(D instanceof A))throw D;Ce(1,0)}}function T_(s,o,u,d,y,E){var C=j();try{Te(s)(o,u,d,y,E)}catch(D){if(J(C),!(D instanceof A))throw D;Ce(1,0)}}function A_(s,o,u,d){var y=j();try{Te(s)(o,u,d)}catch(E){if(J(y),!(E instanceof A))throw E;Ce(1,0)}}function R_(s){var o=j();try{return Te(s)()}catch(u){if(J(o),!(u instanceof A))throw u;return Ce(1,0),0n}}function C_(s,o,u,d,y,E){var C=j();try{Te(s)(o,u,d,y,E)}catch(D){if(J(C),!(D instanceof A))throw D;Ce(1,0)}}function P_(s,o,u,d,y,E,C,D,B,re,ae){var ve=j();try{return Te(s)(o,u,d,y,E,C,D,B,re,ae)}catch(xe){if(J(ve),!(xe instanceof A))throw xe;Ce(1,0)}}function D_(s,o,u,d){var y=j();try{return Te(s)(o,u,d)}catch(E){if(J(y),!(E instanceof A))throw E;Ce(1,0)}}function L_(s,o,u,d,y,E,C,D,B,re,ae,ve){var xe=j();try{return Te(s)(o,u,d,y,E,C,D,B,re,ae,ve)}catch(ge){if(J(xe),!(ge instanceof A))throw ge;Ce(1,0)}}function I_(s,o,u,d,y,E,C,D,B,re,ae,ve,xe,ge,be,it){var Lt=j();try{Te(s)(o,u,d,y,E,C,D,B,re,ae,ve,xe,ge,be,it)}catch(xt){if(J(Lt),!(xt instanceof A))throw xt;Ce(1,0)}}var fh;function F_(){rh(),Y()}function fl(){if(He>0){ot=fl;return}if(F_(),et(),He>0){ot=fl;return}function s(){S(!fh),fh=!0,t.calledRun=!0,!V&&(Ge(),je?.(t),t.onRuntimeInitialized?.(),oe("onRuntimeInitialized"),S(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),zt())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),s()},1)):s(),N()}function U_(){var s=U,o=I,u=!1;U=I=d=>{u=!0};try{cl(0),["stdout","stderr"].forEach(d=>{var y=M.analyzePath("/dev/"+d);if(y){var E=y.object,C=E.rdev,D=Ke.ttys[C];D?.output?.length&&(u=!0)}})}catch{}U=s,I=o,u&&ze("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function N_(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();oe("preInit")}N_(),fl(),bt?e=t:e=new Promise((s,o)=>{je=s,at=o});for(const s of Object.keys(t))s in i||Object.defineProperty(i,s,{configurable:!0,get(){ne(`Access to module property ('${s}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e});const Yv=""+new URL("mujoco-Mp9KyG2b.wasm",import.meta.url).href;function Kv(i,e){const t=Number(i)/Number(e);if(!Number.isInteger(t)||t<1)throw new Error("simulation Hz must be an integer multiple of the depth camera update rate");return t}class Zv{constructor(e,t,n,r){this.sim=e,this.depthCamera=t,this.policy=n,this.manifest=r,this.command=new Float32Array(3),this.ticks=0,this.inferenceMs=0,this.depthCaptureInterval=Kv(r.timing.simulationHz,r.timing.cameraUpdateRate),this.spawnPoint=r.spawnPoints.options.find(a=>a.id===r.spawnPoints.default),this.reset()}reset(e=this.spawnPoint){this.spawnPoint=e,this.sim.reset(e),this.policy.reset(),this.depthCamera.reset(),this.depthCamera.capture(),this.ticks=0,this.inferenceMs=0,this.sim.setTargets(this.manifest.robot.defaultQpos,this.manifest.robot.kpPolicy,this.manifest.robot.kdPolicy)}setCommand(e){const t=this.manifest.observation.observations.find(n=>n.type==="command");for(let n=0;n<3;n++){const r=t.command_range[n];this.command[n]=Math.min(r[1],Math.max(r[0],Number(e[n])))}}async tick(e){this.setCommand(e);const t=this.sim.readState(),n=performance.now(),r=await this.policy.compute(t,this.command,this.depthCamera.frame,this.depthCamera.sequence);return this.inferenceMs=performance.now()-n,this.sim.setTargets(r,this.manifest.robot.kpPolicy,this.manifest.robot.kdPolicy),this.sim.stepControl(a=>{a%this.depthCaptureInterval===0&&this.depthCamera.capture()}),this.ticks++,this.sim.readState()}get gate(){return this.policy.lastGate[0]}get gateScore(){return this.policy.config.gate.mode==="policy"?this.policy.gateState[0]:this.policy.lastGate[0]}get corruptionMode(){return this.depthCamera.corruption.mode}toggleCorruption(){return this.depthCamera.corruption.toggleRandom()}}function Ws(i,e,t){return Math.min(t,Math.max(e,i))}function Jv(i,e=new Float32Array(4)){const t=Math.hypot(i[0],i[1],i[2],i[3]);if(!(t>0))throw new Error("quaternion norm must be positive");for(let n=0;n<4;n++)e[n]=i[n]/t;return e}function Qv(i,e=new Float32Array(3)){const t=Jv(i),[n,r,a,l]=t;return e[0]=2*(a*n-r*l),e[1]=-2*(a*l+r*n),e[2]=2*(r*r+a*a)-1,e}function e0(i=0){let e=Number(i)|0||1831565813,t=null;const n=()=>(e^=e<<13,e^=e>>>17,e^=e<<5,(e>>>0)/4294967296);return n.normal=(r=0,a=1)=>{if(t!=null){const h=t;return t=null,r+a*h}let l=0,c=0;for(;l===0;)l=n();for(;c===0;)c=n();const f=Math.sqrt(-2*Math.log(l));return t=f*Math.sin(2*Math.PI*c),r+a*f*Math.cos(2*Math.PI*c)},n}function t0(i,e){if(!(e>0))return 0;if(e>30)return Math.max(0,Math.round(i.normal(e,Math.sqrt(e))));const t=Math.exp(-e);let n=1,r=0;do r++,n*=i();while(n>t);return r-1}const n0={off:"Off",local_reflection:"Reflection & Blind spots",random_stripe:"Random stripes",patch_mask:"Patch masks",full_mask:"Full mask",gaussian_noise:"Strong noise",pepper_salt:"Pepper & Salt noise"};function $s(i,[e,t]){return e+Math.floor(i()*(t-e+1))}function hc(i,e){return e[Math.min(e.length-1,Math.floor(i()*e.length))]}function i0(i,e,t){const n=e.map(l=>({value:l,weight:Math.max(0,Number(t[l]??1))})),r=n.reduce((l,c)=>l+c.weight,0);if(!(r>0))return hc(i,e);let a=i()*r;for(const l of n)if(a-=l.weight,a<0)return l.value;return n.at(-1).value}class r0{constructor(e=null){this.config=e??{},this.enabled=!!this.config.enabled,this.key=String(this.config.key??"p").toLowerCase(),this.patterns=[...new Set(this.config.patterns??[])],this.patternWeights=this.config.pattern_weights??{},this.outputRange=(this.config.output_range??[0,1]).map(Number),this.rng=e0(this.config.seed??0),this.mode="off",this.lastPattern=null,this.output=null}toggleRandom(){if(!this.enabled)return this.mode;if(this.mode!=="off")return this.mode="off",this.mode;if(this.patterns.length===0)return this.mode;const e=this.patterns.length>1?this.patterns.filter(t=>t!==this.lastPattern):this.patterns;return this.mode=i0(this.rng,e,this.patternWeights),this.lastPattern=this.mode,this.mode}setMode(e){if(e!=="off"&&!this.patterns.includes(e))throw new Error(`unknown depth corruption mode: ${e}`);this.mode=e,e!=="off"&&(this.lastPattern=e)}reset(){this.mode="off"}apply(e,t,n){if(!this.enabled||this.mode==="off")return e;{const l=Number(this.config.frame_probability??1);if(l<1&&this.rng()>=l)return e}(!this.output||this.output.length!==e.length)&&(this.output=new Float32Array(e.length)),this.output.set(e);const[r,a]=this.outputRange;if(this.mode==="full_mask"){const l=this.config.full_mask??{};this.output.fill(Number(hc(this.rng,l.value_choices??this.outputRange)))}else if(this.mode==="gaussian_noise"){const l=this.config.gaussian_noise??{},c=Number(l.mean??0),f=Number(l.std??.25);for(let h=0;h<this.output.length;h++)this.output[h]=Ws(this.output[h]+this.rng.normal(c,f),r,a)}else if(this.mode==="local_reflection")this.#e(t,n);else if(this.mode==="random_stripe")this.#t(t,n);else if(this.mode==="patch_mask")this.#n(t,n);else if(this.mode==="pepper_salt"){const l=this.config.pepper_salt??{},c=Math.min(1,Math.max(0,Number(l.ratio??.05))),f=Math.min(1,Math.max(0,Number(l.salt_ratio??.5)));if(c>0)for(let h=0;h<this.output.length;h++)this.rng()<c&&(this.output[h]=this.rng()<f?a:r)}else throw new Error(`unhandled depth corruption mode: ${this.mode}`);return this.output}#e(e,t){const n=this.config.local_reflection??{};const r=$s(this.rng,n.patch_count_range??[1,3]),a=n.value_choices??this.outputRange;for(let l=0;l<r;l++){const c=Math.min(e,$s(this.rng,n.height_range??[3,8])),f=Math.min(t,$s(this.rng,n.width_range??[4,12])),h=Math.floor(this.rng()*e),m=Math.floor(this.rng()*t),p=Math.max(c/2,.5),g=Math.max(f/2,.5),v=Number(hc(this.rng,a));for(let b=0;b<e;b++)for(let T=0;T<t;T++)((b-h)/p)**2+((T-m)/g)**2<=1&&(this.output[b*t+T]=v)}}#t(e,t){const n=this.config.random_stripe??{};const r=$s(this.rng,n.stripe_count_range??[1,2]),a=n.width_range??[2,6],l=(n.value_range??this.outputRange).map(Number),c=Ws(Number(n.offset_fraction??.6),0,1),f=(e-1)/2,h=(t-1)/2;for(let m=0;m<r;m++){const p=this.rng()*Math.PI,g=-Math.sin(p),v=Math.cos(p),b=Math.abs(g)*h+Math.abs(v)*f,T=(this.rng()*2-1)*b*c,x=$s(this.rng,a)/2,_=l[0]+this.rng()*(l[1]-l[0]);for(let U=0;U<e;U++)for(let I=0;I<t;I++){const F=g*(I-h)+v*(U-f)-T;Math.abs(F)<=x&&(this.output[U*t+I]=_)}}}#n(e,t){const n=this.config.patch_mask??{},r=Number(n.artifacts_prob??.01),a=Number(n.max_blocks??3);if(!(r>0)||a===0)return;const l=Ws(t0(this.rng,r*e*t),1,a),c=n.value_choices??this.outputRange,f=n.height_mean_std??[8,2],h=n.width_mean_std??[8,2];for(let m=0;m<l;m++){const p=Ws(Math.round(this.rng.normal(Number(f[0]),Number(f[1]))),1,e),g=Ws(Math.round(this.rng.normal(Number(h[0]),Number(h[1]))),1,t),v=Math.floor(this.rng()*(e-p+1)),b=Math.floor(this.rng()*(t-g+1)),T=Number(hc(this.rng,c));for(let x=v;x<v+p;x++)this.output.fill(T,x*t+b,x*t+b+g)}}}function mh(i,e){if(e<=1)return 0;let t=i;for(;t<0||t>=e;)t<0&&(t=-t),t>=e&&(t=2*e-t-2);return t}function s0(i,e,t,n,r,a=null){if(!(n>0))return i;const l=a??new Float32Array(i.length),c=new Float32Array(i.length),f=(r-1)/2,h=new Float64Array(r);let m=0;for(let p=-f;p<=f;p++){const g=Math.exp(-.5*(p/n)**2);h[p+f]=g,m+=g}for(let p=0;p<h.length;p++)h[p]/=m;for(let p=0;p<e;p++)for(let g=0;g<t;g++){let v=0;for(let b=-f;b<=f;b++)v+=h[b+f]*i[p*t+mh(g+b,t)];c[p*t+g]=v}for(let p=0;p<e;p++)for(let g=0;g<t;g++){let v=0;for(let b=-f;b<=f;b++)v+=h[b+f]*c[mh(p+b,e)*t+g];l[p*t+g]=v}return l}function a0(i){const e=i.intrinsics,t=Number(e.height),n=Number(e.width),r=Number(e.render_scale??1),a=t*r,l=n*r,c=Number(e.fovy)*Math.PI/180,f=e.fovx==null?2*Math.atan(Math.tan(c/2)*n/t):Number(e.fovx)*Math.PI/180,h=a/(2*Math.tan(c/2)),m=n/(2*Math.tan(f/2)),p=t/(2*Math.tan(c/2)),g=new Float64Array(t*n),v=new Float64Array(t*n);let b=0;for(let T=0;T<t;T++)for(let x=0;x<n;x++,b++){const _=(x+.5-n/2)/m,U=(T+.5-t/2)/p;v[b]=l/2+_*h-.5,g[b]=a/2+U*h-.5}return{rows:g,columns:v,outputHeight:t,outputWidth:n,renderHeight:a,renderWidth:l}}function o0(i,e,t,n,r){const a=Math.floor(n),l=Math.floor(r),c=Math.max(0,Math.min(e-1,a)),f=Math.max(0,Math.min(t-1,l)),h=Math.max(0,Math.min(e-1,a+1)),m=Math.max(0,Math.min(t-1,l+1)),p=n-a,g=r-l,v=i[c*t+f]*(1-g)+i[c*t+m]*g,b=i[h*t+f]*(1-g)+i[h*t+m]*g;return v*(1-p)+b*p}function l0(i,e){return i[e]/256+i[e+1]/65536+i[e+2]/16777216+i[e+3]/4278190080}function c0(i,e,t){return-(e*t)/((t-e)*i-t)}class u0{constructor(e,t,n,r){this.sim=e,this.depthRenderer=t,this.config=n,this.intrinsics=n.intrinsics,this.preprocessing=n.preprocessing,this.remap=a0(n),this.near=Number(this.intrinsics.near),this.far=Number(this.intrinsics.far),this.fillInvalid=Number(this.preprocessing.fill_invalid??this.far),this.clipRange=this.preprocessing.clip_range.map(Number),this.crop=this.preprocessing.crop??{},this.outputHeight=Number(n.outputHeight),this.outputWidth=Number(n.outputWidth),this.frame=new Float32Array(this.outputHeight*this.outputWidth),this.sequence=0,this.corruption=new r0(r),this.cameraId=e.id(e.mj.mjtObj.mjOBJ_CAMERA,n.name),this.rawDepth=new Float32Array(this.remap.renderHeight*this.remap.renderWidth),this.remapped=new Float32Array(this.remap.outputHeight*this.remap.outputWidth),this.cropped=new Float32Array(this.frame.length),this.blurred=new Float32Array(this.frame.length)}reset(){this.sequence=0,this.frame.fill(0),this.corruption.reset()}capture(){this.depthRenderer.captureDepth({cameraId:this.cameraId,width:this.remap.renderWidth,height:this.remap.renderHeight,fovy:Number(this.intrinsics.fovy),near:this.near,far:this.far},this.rawDepth);for(let g=0;g<this.remapped.length;g++)this.remapped[g]=o0(this.rawDepth,this.remap.renderHeight,this.remap.renderWidth,this.remap.rows[g],this.remap.columns[g]);const e=Number(this.crop.top??0),t=Number(this.crop.left??0);let n=0;for(let g=0;g<this.outputHeight;g++){const v=(g+e)*this.remap.outputWidth+t;this.cropped.set(this.remapped.subarray(v,v+this.outputWidth),n),n+=this.outputWidth}let r=this.cropped;const a=this.preprocessing.gaussian_blur??{};Number(a.kernel_size??0)>1&&Number(a.sigma??0)>0&&(r=s0(r,this.outputHeight,this.outputWidth,Number(a.sigma),Number(a.kernel_size),this.blurred));const[l,c]=this.clipRange,f=c-l;for(let g=0;g<r.length;g++){const v=Number.isFinite(r[g])?r[g]:this.fillInvalid;this.frame[g]=Math.min(c,Math.max(l,v))}let h=0,m=1;if(this.preprocessing.normalize_mode==="standard"){for(const v of this.frame)h+=v;h/=this.frame.length;let g=0;for(const v of this.frame)g+=(v-h)**2;m=Math.sqrt(g/this.frame.length)+1e-8}for(let g=0;g<this.frame.length;g++){let v=this.frame[g];this.preprocessing.normalize_mode==="clip_scale"?v=(v-l)/f:this.preprocessing.normalize_mode==="standard"&&(v=(v-h)/m),this.frame[g]=v}const p=this.corruption.apply(this.frame,this.outputHeight,this.outputWidth);return p!==this.frame&&this.frame.set(p),this.sequence++,this.frame}dispose(){}}class h0{constructor(e,t,n){this.canvas=e,this.context=e.getContext("2d",{alpha:!1}),this.valueOutput=t,this.sampleEveryTicks=Math.max(1,Number(n.updateInterval)),this.historyTicks=Math.max(2,Number(n.history)),this.historySeconds=this.historyTicks*Number(n.policyStepDt),this.capacity=Math.max(2,Math.ceil(this.historyTicks/this.sampleEveryTicks)),this.samples=new Float32Array(this.capacity),this.enabled=!1,this.count=0,this.writeIndex=0,this.lastObservedTick=0,this.lastSampleTick=-1,this.nextDrawAt=0,this.dirty=!0,this.width=0,this.height=0,this.resizeObserver=new ResizeObserver(()=>{this.dirty=!0}),this.resizeObserver.observe(e)}setEnabled(e){this.enabled=!!e,this.dirty=!0,this.nextDrawAt=0}reset(){this.count=0,this.writeIndex=0,this.lastSampleTick=-1,this.valueOutput.textContent="--",this.dirty=!0}update(e,t){if(e<this.lastObservedTick&&this.reset(),this.lastObservedTick=e,!this.enabled||e<=0||e===this.lastSampleTick||e%this.sampleEveryTicks!==0)return;const n=Number(t);Number.isFinite(n)&&(this.samples[this.writeIndex]=n,this.writeIndex=(this.writeIndex+1)%this.capacity,this.count=Math.min(this.capacity,this.count+1),this.lastSampleTick=e,this.valueOutput.textContent=n.toFixed(2),this.dirty=!0)}draw(e){if(!this.enabled||!this.dirty||e<this.nextDrawAt||!this.#e())return;this.nextDrawAt=e+200,this.dirty=!1;const t=this.context,n=this.width,r=this.height,a={left:27,top:8,right:n-7,bottom:r-18};t.fillStyle="#f8faf9",t.fillRect(0,0,n,r),t.font="7px ui-monospace, monospace",t.textBaseline="middle",t.lineWidth=1;for(const c of[0,.5,1]){const f=a.bottom-c*(a.bottom-a.top);t.strokeStyle="rgba(32, 47, 52, 0.14)",t.beginPath(),t.moveTo(a.left,f),t.lineTo(a.right,f),t.stroke(),t.fillStyle="#667276",t.textAlign="right",t.fillText(c.toFixed(c===.5?1:0),a.left-4,f)}if(t.fillStyle="#667276",t.textBaseline="bottom",t.textAlign="left",t.fillText(`-${this.historySeconds.toFixed(0)} s`,a.left,r-2),t.textAlign="right",t.fillText("now",a.right,r-2),this.count===0)return;const l=(this.writeIndex-this.count+this.capacity)%this.capacity;t.strokeStyle="#237e96",t.lineWidth=1.6,t.lineJoin="round",t.beginPath();for(let c=0;c<this.count;c++){const f=this.samples[(l+c)%this.capacity],h=this.capacity-this.count+c,m=a.left+h/(this.capacity-1)*(a.right-a.left),p=a.bottom-Math.max(0,Math.min(1,f))*(a.bottom-a.top);c===0?t.moveTo(m,p):t.lineTo(m,p)}t.stroke()}#e(){const e=this.canvas.getBoundingClientRect();if(e.width===0||e.height===0)return!1;const t=Math.min(2,window.devicePixelRatio||1),n=Math.round(e.width*t),r=Math.round(e.height*t);return(this.canvas.width!==n||this.canvas.height!==r)&&(this.canvas.width=n,this.canvas.height=r),this.context.setTransform(t,0,0,t,0,0),this.width=e.width,this.height=e.height,!0}}var cu=Object.defineProperty,f0=Object.getOwnPropertyDescriptor,d0=Object.getOwnPropertyNames,p0=Object.prototype.hasOwnProperty,m0=(i=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(i,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):i)(function(i){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+i+'" is not supported')}),Ut=(i,e)=>()=>(i&&(e=i(i=0)),e),Po=(i,e)=>{for(var t in e)cu(i,t,{get:e[t],enumerable:!0})},g0=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of d0(e))!p0.call(i,r)&&r!==t&&cu(i,r,{get:()=>e[r],enumerable:!(n=f0(e,r))||n.enumerable});return i},fc=i=>g0(cu({},"__esModule",{value:!0}),i),js,Hi,Eo,gh,ad,od=Ut(()=>{js=new Map,Hi=[],Eo=(i,e,t)=>{if(e&&typeof e.init=="function"&&typeof e.createInferenceSessionHandler=="function"){let n=js.get(i);if(n===void 0)js.set(i,{backend:e,priority:t});else{if(n.priority>t)return;if(n.priority===t&&n.backend!==e)throw new Error(`cannot register backend "${i}" using priority ${t}`)}if(t>=0){let r=Hi.indexOf(i);r!==-1&&Hi.splice(r,1);for(let a=0;a<Hi.length;a++)if(js.get(Hi[a]).priority<=t){Hi.splice(a,0,i);return}Hi.push(i)}return}throw new TypeError("not a valid backend")},gh=async i=>{let e=js.get(i);if(!e)return"backend not found.";if(e.initialized)return e.backend;if(e.aborted)return e.error;{let t=!!e.initPromise;try{return t||(e.initPromise=e.backend.init(i)),await e.initPromise,e.initialized=!0,e.backend}catch(n){return t||(e.error=`${n}`,e.aborted=!0),e.error}finally{delete e.initPromise}}},ad=async i=>{let e=i.executionProviders||[],t=e.map(f=>typeof f=="string"?f:f.name),n=t.length===0?Hi:t,r,a=[],l=new Set;for(let f of n){let h=await gh(f);typeof h=="string"?a.push({name:f,err:h}):(r||(r=h),r===h&&l.add(f))}if(!r)throw new Error(`no available backend found. ERR: ${a.map(f=>`[${f.name}] ${f.err}`).join(", ")}`);for(let{name:f,err:h}of a)t.includes(f)&&console.warn(`removing requested execution provider "${f}" from session options because it is not available: ${h}`);let c=e.filter(f=>l.has(typeof f=="string"?f:f.name));return[r,new Proxy(i,{get:(f,h)=>h==="executionProviders"?c:Reflect.get(f,h)})]}}),_0=Ut(()=>{od()}),ld,v0=Ut(()=>{ld="1.27.0"}),dl,yn,cd=Ut(()=>{v0(),dl="warning",yn={wasm:{},webgl:{},webgpu:{},versions:{common:ld},set logLevel(i){if(i!==void 0){if(typeof i!="string"||["verbose","info","warning","error","fatal"].indexOf(i)===-1)throw new Error(`Unsupported logging level: ${i}`);dl=i}},get logLevel(){return dl}},Object.defineProperty(yn,"logLevel",{enumerable:!0})}),Jt,y0=Ut(()=>{cd(),Jt=yn}),ud,hd,x0=Ut(()=>{ud=(i,e)=>{let t=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);t.width=i.dims[3],t.height=i.dims[2];let n=t.getContext("2d");if(n!=null){let r,a;e?.tensorLayout!==void 0&&e.tensorLayout==="NHWC"?(r=i.dims[2],a=i.dims[3]):(r=i.dims[3],a=i.dims[2]);let l=e?.format!==void 0?e.format:"RGB",c=e?.norm,f,h;c===void 0||c.mean===void 0?f=[255,255,255,255]:typeof c.mean=="number"?f=[c.mean,c.mean,c.mean,c.mean]:(f=[c.mean[0],c.mean[1],c.mean[2],0],c.mean[3]!==void 0&&(f[3]=c.mean[3])),c===void 0||c.bias===void 0?h=[0,0,0,0]:typeof c.bias=="number"?h=[c.bias,c.bias,c.bias,c.bias]:(h=[c.bias[0],c.bias[1],c.bias[2],0],c.bias[3]!==void 0&&(h[3]=c.bias[3]));let m=a*r,p=0,g=m,v=m*2,b=-1;l==="RGBA"?(p=0,g=m,v=m*2,b=m*3):l==="RGB"?(p=0,g=m,v=m*2):l==="RBG"&&(p=0,v=m,g=m*2);for(let T=0;T<a;T++)for(let x=0;x<r;x++){let _=(i.data[p++]-h[0])*f[0],U=(i.data[g++]-h[1])*f[1],I=(i.data[v++]-h[2])*f[2],F=b===-1?255:(i.data[b++]-h[3])*f[3];n.fillStyle="rgba("+_+","+U+","+I+","+F+")",n.fillRect(x,T,1,1)}if("toDataURL"in t)return t.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},hd=(i,e)=>{let t=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),n;if(t!=null){let r,a,l;e?.tensorLayout!==void 0&&e.tensorLayout==="NHWC"?(r=i.dims[2],a=i.dims[1],l=i.dims[3]):(r=i.dims[3],a=i.dims[2],l=i.dims[1]);let c=e!==void 0&&e.format!==void 0?e.format:"RGB",f=e?.norm,h,m;f===void 0||f.mean===void 0?h=[255,255,255,255]:typeof f.mean=="number"?h=[f.mean,f.mean,f.mean,f.mean]:(h=[f.mean[0],f.mean[1],f.mean[2],255],f.mean[3]!==void 0&&(h[3]=f.mean[3])),f===void 0||f.bias===void 0?m=[0,0,0,0]:typeof f.bias=="number"?m=[f.bias,f.bias,f.bias,f.bias]:(m=[f.bias[0],f.bias[1],f.bias[2],0],f.bias[3]!==void 0&&(m[3]=f.bias[3]));let p=a*r;if(e!==void 0&&(e.format!==void 0&&l===4&&e.format!=="RGBA"||l===3&&e.format!=="RGB"&&e.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let g=4,v=0,b=1,T=2,x=3,_=0,U=p,I=p*2,F=-1;c==="RGBA"?(_=0,U=p,I=p*2,F=p*3):c==="RGB"?(_=0,U=p,I=p*2):c==="RBG"&&(_=0,I=p,U=p*2),n=t.createImageData(r,a);for(let V=0;V<a*r;v+=g,b+=g,T+=g,x+=g,V++)n.data[v]=(i.data[_++]-m[0])*h[0],n.data[b]=(i.data[U++]-m[1])*h[1],n.data[T]=(i.data[I++]-m[2])*h[2],n.data[x]=F===-1?255:(i.data[F++]-m[3])*h[3]}else throw new Error("Can not access image data");return n}}),Ia,fd,dd,pd,md,gd,w0=Ut(()=>{uu(),Ia=(i,e)=>{if(i===void 0)throw new Error("Image buffer must be defined");if(e.height===void 0||e.width===void 0)throw new Error("Image height and width must be defined");if(e.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:t,width:n}=e,r=e.norm??{mean:255,bias:0},a,l;typeof r.mean=="number"?a=[r.mean,r.mean,r.mean,r.mean]:a=[r.mean[0],r.mean[1],r.mean[2],r.mean[3]??255],typeof r.bias=="number"?l=[r.bias,r.bias,r.bias,r.bias]:l=[r.bias[0],r.bias[1],r.bias[2],r.bias[3]??0];let c=e.format!==void 0?e.format:"RGBA",f=e.tensorFormat!==void 0&&e.tensorFormat!==void 0?e.tensorFormat:"RGB",h=t*n,m=f==="RGBA"?new Float32Array(h*4):new Float32Array(h*3),p=4,g=0,v=1,b=2,T=3,x=0,_=h,U=h*2,I=-1;c==="RGB"&&(p=3,g=0,v=1,b=2,T=-1),f==="RGBA"?I=h*3:f==="RBG"?(x=0,U=h,_=h*2):f==="BGR"&&(U=0,_=h,x=h*2);for(let F=0;F<h;F++,g+=p,b+=p,v+=p,T+=p)m[x++]=(i[g]+l[0])/a[0],m[_++]=(i[v]+l[1])/a[1],m[U++]=(i[b]+l[2])/a[2],I!==-1&&T!==-1&&(m[I++]=(i[T]+l[3])/a[3]);return f==="RGBA"?new $n("float32",m,[1,4,t,n]):new $n("float32",m,[1,3,t,n])},fd=async(i,e)=>{let t=typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement,n=typeof ImageData<"u"&&i instanceof ImageData,r=typeof ImageBitmap<"u"&&i instanceof ImageBitmap,a=typeof i=="string",l,c=e??{},f=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},h=m=>typeof HTMLCanvasElement<"u"&&m instanceof HTMLCanvasElement||m instanceof OffscreenCanvas?m.getContext("2d"):null;if(t){let m=f();m.width=i.width,m.height=i.height;let p=h(m);if(p!=null){let g=i.height,v=i.width;if(e!==void 0&&e.resizedHeight!==void 0&&e.resizedWidth!==void 0&&(g=e.resizedHeight,v=e.resizedWidth),e!==void 0){if(c=e,e.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");c.tensorFormat="RGBA",c.height=g,c.width=v}else c.tensorFormat="RGBA",c.height=g,c.width=v;p.drawImage(i,0,0),l=p.getImageData(0,0,v,g).data}else throw new Error("Can not access image data")}else if(n){let m,p;if(e!==void 0&&e.resizedWidth!==void 0&&e.resizedHeight!==void 0?(m=e.resizedHeight,p=e.resizedWidth):(m=i.height,p=i.width),e!==void 0&&(c=e),c.format="RGBA",c.height=m,c.width=p,e!==void 0){let g=f();g.width=p,g.height=m;let v=h(g);if(v!=null)v.putImageData(i,0,0),l=v.getImageData(0,0,p,m).data;else throw new Error("Can not access image data")}else l=i.data}else if(r){if(e===void 0)throw new Error("Please provide image config with format for Imagebitmap");let m=f();m.width=i.width,m.height=i.height;let p=h(m);if(p!=null){let g=i.height,v=i.width;return p.drawImage(i,0,0,v,g),l=p.getImageData(0,0,v,g).data,c.height=g,c.width=v,Ia(l,c)}else throw new Error("Can not access image data")}else{if(a)return new Promise((m,p)=>{let g=f(),v=h(g);if(!i||!v)return p();let b=new Image;b.crossOrigin="Anonymous",b.src=i,b.onload=()=>{g.width=b.width,g.height=b.height,v.drawImage(b,0,0,g.width,g.height);let T=v.getImageData(0,0,g.width,g.height);c.height=g.height,c.width=g.width,m(Ia(T.data,c))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(l!==void 0)return Ia(l,c);throw new Error("Input data provided is not supported - aborted tensor creation")},dd=(i,e)=>{let{width:t,height:n,download:r,dispose:a}=e,l=[1,n,t,4];return new $n({location:"texture",type:"float32",texture:i,dims:l,download:r,dispose:a})},pd=(i,e)=>{let{dataType:t,dims:n,download:r,dispose:a}=e;return new $n({location:"gpu-buffer",type:t??"float32",gpuBuffer:i,dims:n,download:r,dispose:a})},md=(i,e)=>{let{dataType:t,dims:n,download:r,dispose:a}=e;return new $n({location:"ml-tensor",type:t??"float32",mlTensor:i,dims:n,download:r,dispose:a})},gd=(i,e,t)=>new $n({location:"cpu-pinned",type:i,data:e,dims:t??[e.length]})}),br,sa,pl,_d,E0=Ut(()=>{br=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),sa=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),pl=!1,_d=()=>{if(!pl){pl=!0;let i=typeof BigInt64Array<"u"&&BigInt64Array.from,e=typeof BigUint64Array<"u"&&BigUint64Array.from,t=globalThis.Float16Array,n=typeof t<"u"&&t.from;i&&(br.set("int64",BigInt64Array),sa.set(BigInt64Array,"int64")),e&&(br.set("uint64",BigUint64Array),sa.set(BigUint64Array,"uint64")),n?(br.set("float16",t),sa.set(t,"float16")):br.set("float16",Uint16Array)}}}),vd,yd,b0=Ut(()=>{uu(),vd=i=>{let e=1;for(let t=0;t<i.length;t++){let n=i[t];if(typeof n!="number"||!Number.isSafeInteger(n))throw new TypeError(`dims[${t}] must be an integer, got: ${n}`);if(n<0)throw new RangeError(`dims[${t}] must be a non-negative integer, got: ${n}`);e*=n}return e},yd=(i,e)=>{switch(i.location){case"cpu":return new $n(i.type,i.data,e);case"cpu-pinned":return new $n({location:"cpu-pinned",data:i.data,type:i.type,dims:e});case"texture":return new $n({location:"texture",texture:i.texture,type:i.type,dims:e});case"gpu-buffer":return new $n({location:"gpu-buffer",gpuBuffer:i.gpuBuffer,type:i.type,dims:e});case"ml-tensor":return new $n({location:"ml-tensor",mlTensor:i.mlTensor,type:i.type,dims:e});default:throw new Error(`tensorReshape: tensor location ${i.location} is not supported`)}}}),$n,uu=Ut(()=>{x0(),w0(),E0(),b0(),$n=class{constructor(i,e,t){_d();let n,r;if(typeof i=="object"&&"location"in i)switch(this.dataLocation=i.location,n=i.type,r=i.dims,i.location){case"cpu-pinned":{let l=br.get(n);if(!l)throw new TypeError(`unsupported type "${n}" to create tensor from pinned buffer`);if(!(i.data instanceof l))throw new TypeError(`buffer should be of type ${l.name}`);this.cpuData=i.data;break}case"texture":{if(n!=="float32")throw new TypeError(`unsupported type "${n}" to create tensor from texture`);this.gpuTextureData=i.texture,this.downloader=i.download,this.disposer=i.dispose;break}case"gpu-buffer":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from gpu buffer`);this.gpuBufferData=i.gpuBuffer,this.downloader=i.download,this.disposer=i.dispose;break}case"ml-tensor":{if(n!=="float32"&&n!=="float16"&&n!=="int32"&&n!=="int64"&&n!=="uint32"&&n!=="uint64"&&n!=="int8"&&n!=="uint8"&&n!=="bool"&&n!=="uint4"&&n!=="int4")throw new TypeError(`unsupported type "${n}" to create tensor from MLTensor`);this.mlTensorData=i.mlTensor,this.downloader=i.download,this.disposer=i.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let l,c;if(typeof i=="string")if(n=i,c=t,i==="string"){if(!Array.isArray(e))throw new TypeError("A string tensor's data must be a string array.");l=e}else{let f=br.get(i);if(f===void 0)throw new TypeError(`Unsupported tensor type: ${i}.`);if(Array.isArray(e)){if(i==="float16"&&f===Uint16Array||i==="uint4"||i==="int4")throw new TypeError(`Creating a ${i} tensor from number array is not supported. Please use ${f.name} as data.`);i==="uint64"||i==="int64"?l=f.from(e,BigInt):l=f.from(e)}else if(e instanceof f)l=e;else if(e instanceof Uint8ClampedArray)if(i==="uint8")l=Uint8Array.from(e);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(i==="float16"&&e instanceof Uint16Array&&f!==Uint16Array)l=new globalThis.Float16Array(e.buffer,e.byteOffset,e.length);else throw new TypeError(`A ${n} tensor's data must be type of ${f}`)}else if(c=e,Array.isArray(i)){if(i.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let f=typeof i[0];if(f==="string")n="string",l=i;else if(f==="boolean")n="bool",l=Uint8Array.from(i);else throw new TypeError(`Invalid element type of data array: ${f}.`)}else if(i instanceof Uint8ClampedArray)n="uint8",l=Uint8Array.from(i);else{let f=sa.get(i.constructor);if(f===void 0)throw new TypeError(`Unsupported type for tensor data: ${i.constructor}.`);n=f,l=i}if(c===void 0)c=[l.length];else if(!Array.isArray(c))throw new TypeError("A tensor's dims must be a number array");r=c,this.cpuData=l,this.dataLocation="cpu"}let a=vd(r);if(this.cpuData&&a!==this.cpuData.length&&!((n==="uint4"||n==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=n,this.dims=r,this.size=a}static async fromImage(i,e){return fd(i,e)}static fromTexture(i,e){return dd(i,e)}static fromGpuBuffer(i,e){return pd(i,e)}static fromMLTensor(i,e){return md(i,e)}static fromPinnedBuffer(i,e,t){return gd(i,e,t)}toDataURL(i){return ud(this,i)}toImageData(i){return hd(this,i)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(i){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let e=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=e,i&&this.disposer&&(this.disposer(),this.disposer=void 0),e}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(i){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return yd(this,i)}}}),ci,xd=Ut(()=>{uu(),ci=$n}),dc,ml,vs,ys,xs,ws,wd=Ut(()=>{cd(),dc=(i,e)=>{(typeof yn.trace>"u"?!yn.wasm.trace:!yn.trace)||console.timeStamp(`${i}::ORT::${e}`)},ml=(i,e)=>{let t=new Error().stack?.split(/\r\n|\r|\n/g)||[],n=!1;for(let r=0;r<t.length;r++){if(n&&!t[r].includes("TRACE_FUNC")){let a=`FUNC_${i}::${t[r].trim().split(" ")[1]}`;e&&(a+=`::${e}`),dc("CPU",a);return}t[r].includes("TRACE_FUNC")&&(n=!0)}},vs=i=>{(typeof yn.trace>"u"?!yn.wasm.trace:!yn.trace)||ml("BEGIN",i)},ys=i=>{(typeof yn.trace>"u"?!yn.wasm.trace:!yn.trace)||ml("END",i)},xs=i=>{(typeof yn.trace>"u"?!yn.wasm.trace:!yn.trace)||console.time(`ORT::${i}`)},ws=i=>{(typeof yn.trace>"u"?!yn.wasm.trace:!yn.trace)||console.timeEnd(`ORT::${i}`)}}),Ed,S0=Ut(()=>{od(),xd(),wd(),Ed=class bd{constructor(e){this.handler=e}async run(e,t,n){vs(),xs("InferenceSession.run");let r={},a={};if(typeof e!="object"||e===null||e instanceof ci||Array.isArray(e))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let l=!0;if(typeof t=="object"){if(t===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(t instanceof ci)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(t)){if(t.length===0)throw new TypeError("'fetches' cannot be an empty array.");l=!1;for(let h of t){if(typeof h!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(h)===-1)throw new RangeError(`'fetches' contains invalid output name: ${h}.`);r[h]=null}if(typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let h=!1,m=Object.getOwnPropertyNames(t);for(let p of this.outputNames)if(m.indexOf(p)!==-1){let g=t[p];(g===null||g instanceof ci)&&(h=!0,l=!1,r[p]=g)}if(h){if(typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else a=t}}else if(typeof t<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let h of this.inputNames)if(typeof e[h]>"u")throw new Error(`input '${h}' is missing in 'feeds'.`);if(l)for(let h of this.outputNames)r[h]=null;let c=await this.handler.run(e,r,a),f={};for(let h in c)if(Object.hasOwnProperty.call(c,h)){let m=c[h];m instanceof ci?f[h]=m:f[h]=new ci(m.type,m.data,m.dims)}return ws("InferenceSession.run"),ys(),f}async release(){return this.handler.dispose()}static async create(e,t,n,r){vs(),xs("InferenceSession.create");let a,l={};if(typeof e=="string"){if(a=e,typeof t=="object"&&t!==null)l=t;else if(typeof t<"u")throw new TypeError("'options' must be an object.")}else if(e instanceof Uint8Array){if(a=e,typeof t=="object"&&t!==null)l=t;else if(typeof t<"u")throw new TypeError("'options' must be an object.")}else if(e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer){let m=e,p=0,g=e.byteLength;if(typeof t=="object"&&t!==null)l=t;else if(typeof t=="number"){if(p=t,!Number.isSafeInteger(p))throw new RangeError("'byteOffset' must be an integer.");if(p<0||p>=m.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${m.byteLength}).`);if(g=e.byteLength-p,typeof n=="number"){if(g=n,!Number.isSafeInteger(g))throw new RangeError("'byteLength' must be an integer.");if(g<=0||p+g>m.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${m.byteLength-p}].`);if(typeof r=="object"&&r!==null)l=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(typeof n<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof t<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(m,p,g)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[c,f]=await ad(l),h=await c.createInferenceSessionHandler(a,f);return ws("InferenceSession.create"),ys(),new bd(h)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),hu,M0=Ut(()=>{S0(),hu=Ed}),T0=Ut(()=>{}),A0=Ut(()=>{}),R0=Ut(()=>{}),C0=Ut(()=>{}),P0={};Po(P0,{InferenceSession:()=>hu,TRACE:()=>dc,TRACE_EVENT_BEGIN:()=>xs,TRACE_EVENT_END:()=>ws,TRACE_FUNC_BEGIN:()=>vs,TRACE_FUNC_END:()=>ys,Tensor:()=>ci,env:()=>Jt,registerBackend:()=>Eo});var Pr=Ut(()=>{_0(),y0(),M0(),xd(),T0(),A0(),wd(),R0(),C0()}),fu=Ut(()=>{}),Sd={};Po(Sd,{default:()=>Md});var gl,_l,Md,D0=Ut(()=>{kd(),As(),du(),gl="ort-wasm-proxy-worker",_l=globalThis.self?.name===gl,_l&&(self.onmessage=i=>{let{type:e,in:t}=i.data;try{switch(e){case"init-wasm":pu(t.wasm).then(()=>{yu(t).then(()=>{postMessage({type:e})},n=>{postMessage({type:e,err:n})})},n=>{postMessage({type:e,err:n})});break;case"init-ep":{let{epName:n,env:r}=t;xu(r,n).then(()=>{postMessage({type:e})},a=>{postMessage({type:e,err:a})});break}case"copy-from":{let{buffer:n}=t,r=So(n);postMessage({type:e,out:r});break}case"create":{let{model:n,options:r}=t;wu(n,r).then(a=>{postMessage({type:e,out:a})},a=>{postMessage({type:e,err:a})});break}case"release":Eu(t),postMessage({type:e});break;case"run":{let{sessionId:n,inputIndices:r,inputs:a,outputIndices:l,options:c}=t;bu(n,r,a,l,new Array(l.length).fill(null),c).then(f=>{f.some(h=>h[3]!=="cpu")?postMessage({type:e,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:e,out:f},Mu([...a,...f]))},f=>{postMessage({type:e,err:f})});break}case"end-profiling":Su(t),postMessage({type:e});break;default:}}catch(n){postMessage({type:e,err:n})}}),Md=_l?null:i=>new Worker(i??Wn,{type:"module",name:gl})}),Td={};Po(Td,{default:()=>Ad});async function _h(i={}){var e=i,t=!!globalThis.window,n=!!globalThis.WorkerGlobalScope,r=n&&self.name?.startsWith("em-pthread");e.mountExternalData=(w,P)=>{w.startsWith("./")&&(w=w.substring(2)),(e.Rb||(e.Rb=new Map)).set(w,P)},e.unmountExternalData=()=>{delete e.Rb},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;var a,l,c=(w,P)=>{throw P},f=import.meta.url,h="";if(t||n){try{h=new URL(".",f).href}catch{}n&&(l=w=>{var P=new XMLHttpRequest;return P.open("GET",w,!1),P.responseType="arraybuffer",P.send(null),new Uint8Array(P.response)}),a=async w=>{if(V(w))return new Promise((H,z)=>{var q=new XMLHttpRequest;q.open("GET",w,!0),q.responseType="arraybuffer",q.onload=()=>{q.status==200||q.status==0&&q.response?H(q.response):z(q.status)},q.onerror=z,q.send(null)});var P=await fetch(w,{credentials:"same-origin"});if(P.ok)return P.arrayBuffer();throw Error(P.status+" : "+P.url)}}var m,p,g,v,b,T,x=console.log.bind(console),_=console.error.bind(console),U=x,I=_,F=!1,V=w=>w.startsWith("file://");function S(){St.buffer!=Y.buffer&&se()}if(r){let w=function(P){try{var H=P.data,z=H.Pb;if(z==="load"){let q=[];self.onmessage=le=>q.push(le),T=()=>{postMessage({Pb:"loaded"});for(let le of q)w(le);self.onmessage=w};for(let le of H.Zb)e[le]&&!e[le].proxy||(e[le]=(...Le)=>{postMessage({Pb:"callHandler",Yb:le,args:Le})},le=="print"&&(U=e[le]),le=="printErr"&&(I=e[le]));St=H.dc,se(),p=H.ec,at(),tn()}else if(z==="run"){(function(q){var le=(S(),K)[q+52>>>2>>>0];q=(S(),K)[q+56>>>2>>>0],xa(le,le-q),mt(le)})(H.Ob),Ls(H.Ob,0,0,1,0,0),He(),sr(H.Ob),G||=!0;try{ne(H.bc,H.Tb)}catch(q){if(q!="unwind")throw q}}else H.target!=="setimmediate"&&(z==="checkMailbox"?G&&ki():z&&(I(`worker: received unknown command ${z}`),I(H)))}catch(q){throw kr(),q}};var G=!1;self.onunhandledrejection=P=>{throw P.reason||P},self.onmessage=w}var Y,N,A,O,K,oe,Z,$,ee,pe=!1;function se(){var w=St.buffer;e.HEAP8=Y=new Int8Array(w),A=new Int16Array(w),e.HEAPU8=N=new Uint8Array(w),e.HEAP32=O=new Int32Array(w),e.HEAPU32=K=new Uint32Array(w),oe=new Float32Array(w),Z=new Float64Array(w),$=new BigInt64Array(w),new BigUint64Array(w)}function Ee(){pe=!0,r?T():Bn.Ta()}function De(w){throw I(w="Aborted("+w+")"),F=!0,w=new WebAssembly.RuntimeError(w+". Build with -sASSERTIONS for more info."),b?.(w),w}function je(){return{a:{R:zo,f:me,w:Ie,e:tt,k:Ye,g:Ue,S:ut,b:X,G:Pe,ta:Be,j:J,L:Dt,Ja:pt,pa:In,ra:nn,Ka:di,Ha:jn,Aa:Ni,Ga:Sn,Y:ir,qa:Xn,na:pi,Ia:ni,oa:rr,Pa:Ur,Da:Cs,la:Ds,ua:te,ia:he,T:ce,Ca:sr,Ma:ie,xa:Se,ya:Ke,za:nt,va:Me,wa:vt,ja:Bt,Ra:Ze,Oa:Mt,V:ii,U:M,Na:Xt,F:Ot,La:qt,ma:fn,u:Kt,H:on,Q:Nr,ka:ko,aa:Oo,Sa:Bo,Ea:ar,Fa:Bi,sa:W,I:Tt,X:ga,Ba:Mn,W:vi,_:Kn,M:tl,$:Aa,N:el,v:Bs,d:Vr,m:Vo,n:Ho,q:Te,ba:Xr,x:Si,o:jo,O:zs,D:Ta,J:jr,ca:Jo,da:Zo,A:Yn,P:Ko,ea:Ma,z:zn,E:Qo,c:Go,r:$o,i:Wo,Z:Hs,l:Xo,p:Wr,s:Gr,t:Ea,y:qo,fa:Yo,B:nl,K:Sa,C:il,ga:$r,ha:ba,h:va,a:St,Qa:dt}}}async function at(){function w(z,q){return Bn=z.exports,Bn=(function(){var le=Bn,Le=_t=>()=>_t()>>>0,Je=_t=>At=>_t(At)>>>0;return(le=Object.assign({},le)).sb=Le(le.sb),le.ub=Je(le.ub),le.Ib=Je(le.Ib),le.Jb=Le(le.Jb),le.Nb=Je(le.Nb),le})(),et.push(Bn.vb),z=Bn,e._OrtInit=z.Ua,e._OrtGetLastError=z.Va,e._OrtCreateSessionOptions=z.Wa,e._OrtAppendExecutionProvider=z.Xa,e._OrtAddFreeDimensionOverride=z.Ya,e._OrtAddSessionConfigEntry=z.Za,e._OrtReleaseSessionOptions=z._a,e._OrtCreateSession=z.$a,e._OrtReleaseSession=z.ab,e._OrtGetInputOutputCount=z.bb,e._OrtGetInputOutputMetadata=z.cb,e._OrtFree=z.db,e._OrtCreateTensor=z.eb,e._OrtGetTensorData=z.fb,e._OrtReleaseTensor=z.gb,e._OrtCreateRunOptions=z.hb,e._OrtAddRunConfigEntry=z.ib,e._OrtReleaseRunOptions=z.jb,e._OrtCreateBinding=z.kb,e._OrtBindInput=z.lb,e._OrtBindOutput=z.mb,e._OrtClearBoundOutputs=z.nb,e._OrtReleaseBinding=z.ob,e._OrtRunWithBinding=z.pb,e._OrtRun=z.qb,e._OrtEndProfiling=z.rb,Or=z.sb,kn=e._free=z.tb,ya=e._malloc=z.ub,Ls=z.xb,kr=z.yb,Br=z.zb,Is=z.Ab,Fs=z.Bb,Us=z.Cb,Ns=z.Db,gt=z.Eb,or=z.Fb,xa=z.Gb,mt=z.Hb,Os=z.Ib,ht=z.Jb,lr=z.Kb,zr=z.Lb,zi=z.Mb,wa=z.Nb,cr=z.wb,p=q,Bn}var P,H=je();return e.instantiateWasm?new Promise(z=>{e.instantiateWasm(H,(q,le)=>{z(w(q,le))})}):r?w(new WebAssembly.Instance(p,je()),p):(ee??=e.locateFile?e.locateFile?e.locateFile("ort-wasm-simd-threaded.wasm",h):h+"ort-wasm-simd-threaded.wasm":new URL(""+new URL("ort-wasm-simd-threaded-Cpm-ox6i.wasm",import.meta.url).href,import.meta.url).href,P=await(async function(z){var q=ee;if(!m&&!V(q))try{var le=fetch(q,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(le,z)}catch(Le){I(`wasm streaming compile failed: ${Le}`),I("falling back to ArrayBuffer instantiation")}return(async function(Le,Je){try{var _t=await(async function(At){if(!m)try{var dn=await a(At);return new Uint8Array(dn)}catch{}if(At==ee&&m)At=new Uint8Array(m);else{if(!l)throw"both async and sync fetching of the wasm failed";At=l(At)}return At})(Le);return await WebAssembly.instantiate(_t,Je)}catch(At){I(`failed to asynchronously prepare wasm: ${At}`),De(At)}})(q,z)})(H),w(P.instance,P.module))}class Et{name="ExitStatus";constructor(P){this.message=`Program terminated with exit(${P})`,this.status=P}}var lt=w=>{w.terminate(),w.onmessage=()=>{}},Qe=[],de=0,ye=null,ue=w=>{bt.length==0&&(Ht(),ot(bt[0]));var P=bt.pop();if(!P)return 6;rt.push(P),Ge[w.Ob]=P,P.Ob=w.Ob;var H={Pb:"run",bc:w.ac,Tb:w.Tb,Ob:w.Ob};return P.postMessage(H,w.Xb),0},_e=0,Ae=(w,P,...H)=>{var z,q=16*H.length,le=ht(),Le=Os(q),Je=Le>>>3;for(z of H)typeof z=="bigint"?((S(),$)[Je++>>>0]=1n,(S(),$)[Je++>>>0]=z):((S(),$)[Je++>>>0]=0n,(S(),Z)[Je++>>>0]=z);return w=Br(w,0,q,Le,P),mt(le),w};function dt(w){if(r)return Ae(0,1,w);if(g=w,!(0<_e)){for(var P of rt)lt(P);for(P of bt)lt(P);bt=[],rt=[],Ge={},F=!0}c(0,new Et(w))}function Nt(w){if(r)return Ae(1,0,w);W(w)}var W=w=>{if(g=w,r)throw Nt(w),"unwind";dt(w)},bt=[],rt=[],et=[],Ge={},zt=w=>{var P=w.Ob;delete Ge[P],bt.push(w),rt.splice(rt.indexOf(w),1),w.Ob=0,Is(P)};function He(){et.forEach(w=>w())}var ot=w=>new Promise(P=>{w.onmessage=q=>{var le=q.data;if(q=le.Pb,le.Sb&&le.Sb!=Or()){var Le=Ge[le.Sb];Le?Le.postMessage(le,le.Xb):I(`Internal error! Worker sent a message "${q}" to target pthread ${le.Sb}, but that thread no longer exists!`)}else q==="checkMailbox"?ki():q==="spawnThread"?ue(le):q==="cleanupThread"?Oi(()=>{zt(Ge[le.cc])}):q==="loaded"?(w.loaded=!0,P(w)):le.target==="setimmediate"?w.postMessage(le):q==="uncaughtException"?w.onerror(le.error):q==="callHandler"?e[le.Yb](...le.args):q&&I(`worker sent an unknown command ${q}`)},w.onerror=q=>{throw I(`worker sent an error! ${q.filename}:${q.lineno}: ${q.message}`),q};var H,z=[];for(H of[])e.propertyIsEnumerable(H)&&z.push(H);w.postMessage({Pb:"load",Zb:z,dc:St,ec:p})});function Ht(){var w=new Worker((()=>{let P=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new P("ort.wasm.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});bt.push(w)}var St,k=[],R=w=>{var P=k[w];return P||(k[w]=P=cr.get(w)),P},ne=(w,P)=>{_e=0,w=R(w)(P),0<_e?g=w:Fs(w)},fe=[],we=0;function me(w){var P=new Re(w>>>=0);return(S(),Y)[P.Qb+12>>>0]==0&&(Xe(P,!0),we--),qe(P,!1),fe.push(P),wa(w)}var $e=0,Ie=()=>{gt(0,0);var w=fe.pop();lr(w.Ub),$e=0};function Xe(w,P){P=P?1:0,(S(),Y)[w.Qb+12>>>0]=P}function qe(w,P){P=P?1:0,(S(),Y)[w.Qb+13>>>0]=P}class Re{constructor(P){this.Ub=P,this.Qb=P-24}}var Oe=w=>{var P=$e;if(!P)return or(0),0;var H=new Re(P);(S(),K)[H.Qb+16>>>2>>>0]=P;var z=(S(),K)[H.Qb+4>>>2>>>0];if(!z)return or(0),P;for(var q of w){if(q===0||q===z)break;if(zi(q,z,H.Qb+16))return or(q),P}return or(z),P};function tt(){return Oe([])}function Ye(w){return Oe([w>>>0])}function Ue(w,P,H,z){return Oe([w>>>0,P>>>0,H>>>0,z>>>0])}var ut=()=>{var w=fe.pop();w||De("no exception to throw");var P=w.Ub;throw(S(),Y)[w.Qb+13>>>0]==0&&(fe.push(w),qe(w,!0),Xe(w,!1),we++),zr(P),$e=P};function X(w,P,H){var z=new Re(w>>>=0);throw P>>>=0,H>>>=0,(S(),K)[z.Qb+16>>>2>>>0]=0,(S(),K)[z.Qb+4>>>2>>>0]=P,(S(),K)[z.Qb+8>>>2>>>0]=H,zr(w),we++,$e=w}var Pe=()=>we;function Fe(w,P,H,z){return r?Ae(2,1,w,P,H,z):Be(w,P,H,z)}function Be(w,P,H,z){if(w>>>=0,P>>>=0,H>>>=0,z>>>=0,!globalThis.SharedArrayBuffer)return 6;var q=[];return r&&q.length===0?Fe(w,P,H,z):(w={ac:H,Ob:w,Tb:z,Xb:q},r?(w.Pb="spawnThread",postMessage(w,q),0):ue(w))}function J(w){throw $e||=w>>>0,$e}var j=globalThis.TextDecoder&&new TextDecoder,ze=(w,P=0,H,z)=>{var q=P>>>=0;if(H=q+H,z)z=H;else{for(;w[q]&&!(q>=H);)++q;z=q}if(16<z-P&&w.buffer&&j)return j.decode(w.buffer instanceof ArrayBuffer?w.subarray(P,z):w.slice(P,z));for(q="";P<z;)if(128&(H=w[P++])){var le=63&w[P++];if((224&H)==192)q+=String.fromCharCode((31&H)<<6|le);else{var Le=63&w[P++];65536>(H=(240&H)==224?(15&H)<<12|le<<6|Le:(7&H)<<18|le<<12|Le<<6|63&w[P++])?q+=String.fromCharCode(H):(H-=65536,q+=String.fromCharCode(55296|H>>10,56320|1023&H))}}else q+=String.fromCharCode(H);return q},st=(w,P,H)=>(w>>>=0)?ze((S(),N),w,P,H):"";function Dt(w,P,H){return r?Ae(3,1,w,P,H):0}function pt(w,P){if(r)return Ae(4,1,w,P)}function In(w,P){if(r)return Ae(5,1,w,P)}function nn(w,P,H){if(r)return Ae(6,1,w,P,H)}function di(w,P,H){return r?Ae(7,1,w,P,H):0}function jn(w,P){if(r)return Ae(8,1,w,P)}function Ni(w,P,H){if(r)return Ae(9,1,w,P,H)}function Sn(w,P,H,z){if(r)return Ae(10,1,w,P,H,z)}function ir(w,P,H,z){if(r)return Ae(11,1,w,P,H,z)}function Xn(w,P,H,z){if(r)return Ae(12,1,w,P,H,z)}function pi(w){if(r)return Ae(13,1,w)}function ni(w,P){if(r)return Ae(14,1,w,P)}function rr(w,P,H){if(r)return Ae(15,1,w,P,H)}var Ur=()=>De("");function Cs(w){Ls(w>>>0,!n,1,!t,131072,!1),He()}var Oi=w=>{if(!F)try{if(w(),!(0<_e))try{r?Or()&&Fs(g):W(g)}catch(P){P instanceof Et||P=="unwind"||c(0,P)}}catch(P){P instanceof Et||P=="unwind"||c(0,P)}},Ps=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function sr(w){w>>>=0,Ps||(Atomics.waitAsync((S(),O),w>>>2,w).value.then(ki),w+=128,Atomics.store((S(),O),w>>>2,1))}var ki=()=>Oi(()=>{var w=Or();w&&(sr(w),Ns())});function Ds(w,P){(w>>>=0)==P>>>0?setTimeout(ki):r?postMessage({Sb:w,Pb:"checkMailbox"}):(w=Ge[w])&&w.postMessage({Pb:"checkMailbox"})}var L=[];function te(w,P,H,z,q){for(P>>>=0,q>>>=0,L.length=0,H=q>>>3,z=q+z>>>3;H<z;){var le;le=(S(),$)[H++>>>0]?(S(),$)[H++>>>0]:(S(),Z)[H++>>>0],L.push(le)}return(P?Hr[P]:ks[w])(...L)}var he=()=>{_e=0};function ce(w){w>>>=0,r?postMessage({Pb:"cleanupThread",cc:w}):zt(Ge[w])}function ie(w){}function Se(w,P){w=-9007199254740992>w||9007199254740992<w?NaN:Number(w),P>>>=0,w=new Date(1e3*w),(S(),O)[P>>>2>>>0]=w.getUTCSeconds(),(S(),O)[P+4>>>2>>>0]=w.getUTCMinutes(),(S(),O)[P+8>>>2>>>0]=w.getUTCHours(),(S(),O)[P+12>>>2>>>0]=w.getUTCDate(),(S(),O)[P+16>>>2>>>0]=w.getUTCMonth(),(S(),O)[P+20>>>2>>>0]=w.getUTCFullYear()-1900,(S(),O)[P+24>>>2>>>0]=w.getUTCDay(),w=(w.getTime()-Date.UTC(w.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(S(),O)[P+28>>>2>>>0]=w}var Ne=w=>w%4==0&&(w%100!=0||w%400==0),We=[0,31,60,91,121,152,182,213,244,274,305,335],Ve=[0,31,59,90,120,151,181,212,243,273,304,334];function Ke(w,P){w=-9007199254740992>w||9007199254740992<w?NaN:Number(w),P>>>=0,w=new Date(1e3*w),(S(),O)[P>>>2>>>0]=w.getSeconds(),(S(),O)[P+4>>>2>>>0]=w.getMinutes(),(S(),O)[P+8>>>2>>>0]=w.getHours(),(S(),O)[P+12>>>2>>>0]=w.getDate(),(S(),O)[P+16>>>2>>>0]=w.getMonth(),(S(),O)[P+20>>>2>>>0]=w.getFullYear()-1900,(S(),O)[P+24>>>2>>>0]=w.getDay();var H=(Ne(w.getFullYear())?We:Ve)[w.getMonth()]+w.getDate()-1|0;(S(),O)[P+28>>>2>>>0]=H,(S(),O)[P+36>>>2>>>0]=-60*w.getTimezoneOffset(),H=new Date(w.getFullYear(),6,1).getTimezoneOffset();var z=new Date(w.getFullYear(),0,1).getTimezoneOffset();w=0|(H!=z&&w.getTimezoneOffset()==Math.min(z,H)),(S(),O)[P+32>>>2>>>0]=w}function nt(w){w>>>=0;var P=new Date((S(),O)[w+20>>>2>>>0]+1900,(S(),O)[w+16>>>2>>>0],(S(),O)[w+12>>>2>>>0],(S(),O)[w+8>>>2>>>0],(S(),O)[w+4>>>2>>>0],(S(),O)[w>>>2>>>0],0),H=(S(),O)[w+32>>>2>>>0],z=P.getTimezoneOffset(),q=new Date(P.getFullYear(),6,1).getTimezoneOffset(),le=new Date(P.getFullYear(),0,1).getTimezoneOffset(),Le=Math.min(le,q);return 0>H?(S(),O)[w+32>>>2>>>0]=+(q!=le&&Le==z):0<H!=(Le==z)&&(q=Math.max(le,q),P.setTime(P.getTime()+6e4*((0<H?Le:q)-z))),(S(),O)[w+24>>>2>>>0]=P.getDay(),H=(Ne(P.getFullYear())?We:Ve)[P.getMonth()]+P.getDate()-1|0,(S(),O)[w+28>>>2>>>0]=H,(S(),O)[w>>>2>>>0]=P.getSeconds(),(S(),O)[w+4>>>2>>>0]=P.getMinutes(),(S(),O)[w+8>>>2>>>0]=P.getHours(),(S(),O)[w+12>>>2>>>0]=P.getDate(),(S(),O)[w+16>>>2>>>0]=P.getMonth(),(S(),O)[w+20>>>2>>>0]=P.getYear(),w=P.getTime(),BigInt(isNaN(w)?-1:w/1e3)}function Me(w,P,H,z,q,le,Le){return r?Ae(16,1,w,P,H,z,q,le,Le):-52}function vt(w,P,H,z,q,le){if(r)return Ae(17,1,w,P,H,z,q,le)}var Rt={},Kt=()=>performance.timeOrigin+performance.now();function Bt(w,P){if(r)return Ae(18,1,w,P);if(Rt[w]&&(clearTimeout(Rt[w].id),delete Rt[w]),!P)return 0;var H=setTimeout(()=>{delete Rt[w],Oi(()=>Us(w,performance.timeOrigin+performance.now()))},P);return Rt[w]={id:H,jc:P},0}var Ct=(w,P,H)=>{var z=(S(),N);if(P>>>=0,0<H){var q=P;H=P+H-1;for(var le=0;le<w.length;++le){var Le=w.codePointAt(le);if(127>=Le){if(P>=H)break;z[P++>>>0]=Le}else if(2047>=Le){if(P+1>=H)break;z[P++>>>0]=192|Le>>6,z[P++>>>0]=128|63&Le}else if(65535>=Le){if(P+2>=H)break;z[P++>>>0]=224|Le>>12,z[P++>>>0]=128|Le>>6&63,z[P++>>>0]=128|63&Le}else{if(P+3>=H)break;z[P++>>>0]=240|Le>>18,z[P++>>>0]=128|Le>>12&63,z[P++>>>0]=128|Le>>6&63,z[P++>>>0]=128|63&Le,le++}}z[P>>>0]=0,w=P-q}else w=0;return w};function Ze(w,P,H,z){w>>>=0,P>>>=0,H>>>=0,z>>>=0;var q=new Date().getFullYear(),le=new Date(q,0,1).getTimezoneOffset();q=new Date(q,6,1).getTimezoneOffset();var Le=Math.max(le,q);(S(),K)[w>>>2>>>0]=60*Le,(S(),O)[P>>>2>>>0]=+(le!=q),w=(P=Je=>{var _t=Math.abs(Je);return`UTC${0<=Je?"-":"+"}${String(Math.floor(_t/60)).padStart(2,"0")}${String(_t%60).padStart(2,"0")}`})(le),P=P(q),q<le?(Ct(w,H,17),Ct(P,z,17)):(Ct(w,z,17),Ct(P,H,17))}var Xt=()=>Date.now();function Mt(w,P,H){return H>>>=0,0<=w&&3>=w?(w===0?w=Date.now():w=performance.timeOrigin+performance.now(),w=Math.round(1e6*w),(S(),$)[H>>>3>>>0]=BigInt(w),0):28}var hn=[];function ii(w,P,H){w>>>=0,P>>>=0,H>>>=0,hn.length=0;for(var z;z=(S(),N)[P++>>>0];){var q=z!=105;H+=(q&=z!=112)&&H%8?4:0,hn.push(z==112?(S(),K)[H>>>2>>>0]:z==106?(S(),$)[H>>>3>>>0]:z==105?(S(),O)[H>>>2>>>0]:(S(),Z)[H>>>3>>>0]),H+=q?8:4}return Hr[w](...hn)}var M=()=>{};function Ot(w,P){return I(st(w>>>0,P>>>0))}var qt=()=>{throw _e+=1,"unwind"};function fn(){return 4294901760}var on=()=>navigator.hardwareConcurrency,Qt={},ln=w=>{for(var P=0,H=0;H<w.length;++H){var z=w.charCodeAt(H);127>=z?P++:2047>=z?P+=2:55296<=z&&57343>=z?(P+=4,++H):P+=3}return P},mi=w=>{var P;return(P=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(w))?+P[1]:(P=/:(\d+):\d+(?:\)|$)/.exec(w))?2147483648|+P[1]:0},qn=w=>{for(var P of w)(w=mi(P))&&(Qt[w]=P)};function Oo(){var w=Error().stack.toString().split(`
`);return w[0]=="Error"&&w.shift(),qn(w),Qt.Vb=mi(w[3]),Qt.$b=w,Qt.Vb}function Nr(w){if(!(w=Qt[w>>>0]))return 0;var P;if(P=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(w))w=P[1];else if(P=/^\s+at (.*) \(.*\)$/.exec(w))w=P[1];else{if(!(P=/^(.+?)@/.exec(w)))return 0;w=P[1]}kn(Nr.Wb??0),P=ln(w)+1;var H=ya(P);return H&&Ct(w,H,P),Nr.Wb=H,Nr.Wb}function ko(w){w>>>=0;var P=(S(),N).length;if(w<=P||4294901760<w)return!1;for(var H=1;4>=H;H*=2){var z=P*(1+.2/H);z=Math.min(z,w+100663296);e:{z=(Math.min(4294901760,65536*Math.ceil(Math.max(w,z)/65536))-St.buffer.byteLength+65535)/65536|0;try{St.grow(z),se();var q=1;break e}catch{}q=void 0}if(q)return!0}return!1}function Bo(w,P,H){if(w>>>=0,P>>>=0,Qt.Vb==w)var z=Qt.$b;else(z=Error().stack.toString().split(`
`))[0]=="Error"&&z.shift(),qn(z);for(var q=3;z[q]&&mi(z[q])!=w;)++q;for(w=0;w<H&&z[w+q];++w)(S(),O)[P+4*w>>>2>>>0]=mi(z[w+q]);return w}var rn,gi={},_i=()=>{if(!rn){var w,P={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(w in gi)gi[w]===void 0?delete P[w]:P[w]=gi[w];var H=[];for(w in P)H.push(`${w}=${P[w]}`);rn=H}return rn};function ar(w,P){if(r)return Ae(19,1,w,P);w>>>=0,P>>>=0;var H,z=0,q=0;for(H of _i()){var le=P+z;(S(),K)[w+q>>>2>>>0]=le,z+=Ct(H,le,1/0)+1,q+=4}return 0}function Bi(w,P){if(r)return Ae(20,1,w,P);w>>>=0,P>>>=0;var H=_i();for(var z of((S(),K)[w>>>2>>>0]=H.length,w=0,H))w+=ln(z)+1;return(S(),K)[P>>>2>>>0]=w,0}function Tt(w){return r?Ae(21,1,w):52}function ga(w,P,H,z){return r?Ae(22,1,w,P,H,z):52}function Mn(w,P,H,z){return r?Ae(23,1,w,P,H,z):70}var _a=[null,[],[]];function vi(w,P,H,z){if(r)return Ae(24,1,w,P,H,z);P>>>=0,H>>>=0,z>>>=0;for(var q=0,le=0;le<H;le++){var Le=(S(),K)[P>>>2>>>0],Je=(S(),K)[P+4>>>2>>>0];P+=8;for(var _t=0;_t<Je;_t++){var At=w,dn=(S(),N)[Le+_t>>>0],Hn=_a[At];dn===0||dn===10?((At===1?U:I)(ze(Hn)),Hn.length=0):Hn.push(dn)}q+=Je}return(S(),K)[z>>>2>>>0]=q,0}function va(w){return w>>>0}r||(function(){for(var w=e.numThreads-1;w--;)Ht();Qe.push(async()=>{var P=(async function(){if(!r)return Promise.all(bt.map(ot))})();de++,await P,--de==0&&ye&&(P=ye,ye=null,P())})})(),r||(St=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),se()),e.wasmBinary&&(m=e.wasmBinary),e.stackSave=()=>ht(),e.stackRestore=w=>mt(w),e.stackAlloc=w=>Os(w),e.setValue=function(w,P,H="i8"){switch(H.endsWith("*")&&(H="*"),H){case"i1":case"i8":(S(),Y)[w>>>0]=P;break;case"i16":(S(),A)[w>>>1>>>0]=P;break;case"i32":(S(),O)[w>>>2>>>0]=P;break;case"i64":(S(),$)[w>>>3>>>0]=BigInt(P);break;case"float":(S(),oe)[w>>>2>>>0]=P;break;case"double":(S(),Z)[w>>>3>>>0]=P;break;case"*":(S(),K)[w>>>2>>>0]=P;break;default:De(`invalid type for setValue: ${H}`)}},e.getValue=function(w,P="i8"){switch(P.endsWith("*")&&(P="*"),P){case"i1":case"i8":return(S(),Y)[w>>>0];case"i16":return(S(),A)[w>>>1>>>0];case"i32":return(S(),O)[w>>>2>>>0];case"i64":return(S(),$)[w>>>3>>>0];case"float":return(S(),oe)[w>>>2>>>0];case"double":return(S(),Z)[w>>>3>>>0];case"*":return(S(),K)[w>>>2>>>0];default:De(`invalid type for getValue: ${P}`)}},e.UTF8ToString=st,e.stringToUTF8=Ct,e.lengthBytesUTF8=ln;var Or,kn,ya,Ls,kr,Br,Is,Fs,Us,Ns,gt,or,xa,mt,Os,ht,lr,zr,zi,wa,cr,Bn,ks=[dt,Nt,Fe,Dt,pt,In,nn,di,jn,Ni,Sn,ir,Xn,pi,ni,rr,Me,vt,Bt,ar,Bi,Tt,ga,Mn,vi],Hr={960468:(w,P,H,z,q)=>{if(e===void 0||!e.Rb)return 1;if((w=st(Number(w>>>0))).startsWith("./")&&(w=w.substring(2)),!(w=e.Rb.get(w)))return 2;if(P=Number(P>>>0),H=Number(H>>>0),z=Number(z>>>0),P+H>w.byteLength)return 3;try{let le=w.subarray(P,P+H);switch(q){case 0:(S(),N).set(le,z>>>0);break;case 1:e.fc?e.fc(z,le):e.ic(z,le);break;default:return 4}return 0}catch{return 4}},961292:()=>typeof wasmOffsetConverter<"u"};function zo(){return typeof wasmOffsetConverter<"u"}function Ho(w,P,H,z){var q=ht();try{return R(w)(P,H,z)}catch(le){if(mt(q),le!==le+0)throw le;gt(1,0)}}function Vo(w,P,H){var z=ht();try{return R(w)(P,H)}catch(q){if(mt(z),q!==q+0)throw q;gt(1,0)}}function Go(w){var P=ht();try{R(w)()}catch(H){if(mt(P),H!==H+0)throw H;gt(1,0)}}function Vr(w,P){var H=ht();try{return R(w)(P)}catch(z){if(mt(H),z!==z+0)throw z;gt(1,0)}}function Wo(w,P,H){var z=ht();try{R(w)(P,H)}catch(q){if(mt(z),q!==q+0)throw q;gt(1,0)}}function $o(w,P){var H=ht();try{R(w)(P)}catch(z){if(mt(H),z!==z+0)throw z;gt(1,0)}}function jo(w,P,H,z,q,le,Le){var Je=ht();try{return R(w)(P,H,z,q,le,Le)}catch(_t){if(mt(Je),_t!==_t+0)throw _t;gt(1,0)}}function Gr(w,P,H,z,q,le){var Le=ht();try{R(w)(P,H,z,q,le)}catch(Je){if(mt(Le),Je!==Je+0)throw Je;gt(1,0)}}function Xo(w,P,H,z){var q=ht();try{R(w)(P,H,z)}catch(le){if(mt(q),le!==le+0)throw le;gt(1,0)}}function Wr(w,P,H,z,q){var le=ht();try{R(w)(P,H,z,q)}catch(Le){if(mt(le),Le!==Le+0)throw Le;gt(1,0)}}function Ea(w,P,H,z,q,le,Le){var Je=ht();try{R(w)(P,H,z,q,le,Le)}catch(_t){if(mt(Je),_t!==_t+0)throw _t;gt(1,0)}}function ba(w,P,H,z,q,le,Le){var Je=ht();try{R(w)(P,H,z,q,le,Le)}catch(_t){if(mt(Je),_t!==_t+0)throw _t;gt(1,0)}}function $r(w,P,H,z,q,le,Le,Je){var _t=ht();try{R(w)(P,H,z,q,le,Le,Je)}catch(At){if(mt(_t),At!==At+0)throw At;gt(1,0)}}function Te(w,P,H,z,q){var le=ht();try{return R(w)(P,H,z,q)}catch(Le){if(mt(le),Le!==Le+0)throw Le;gt(1,0)}}function Yn(w,P,H){var z=ht();try{return R(w)(P,H)}catch(q){if(mt(z),q!==q+0)throw q;gt(1,0)}}function qo(w,P,H,z,q,le,Le,Je){var _t=ht();try{R(w)(P,H,z,q,le,Le,Je)}catch(At){if(mt(_t),At!==At+0)throw At;gt(1,0)}}function Sa(w,P,H,z,q,le,Le,Je,_t,At,dn,Hn){var ri=ht();try{R(w)(P,H,z,q,le,Le,Je,_t,At,dn,Hn)}catch(xn){if(mt(ri),xn!==xn+0)throw xn;gt(1,0)}}function Si(w,P,H,z,q,le){var Le=ht();try{return R(w)(P,H,z,q,le)}catch(Je){if(mt(Le),Je!==Je+0)throw Je;gt(1,0)}}function zn(w,P,H){var z=ht();try{return R(w)(P,H)}catch(q){if(mt(z),q!==q+0)throw q;return gt(1,0),0n}}function Yo(w,P,H,z,q,le,Le,Je,_t){var At=ht();try{R(w)(P,H,z,q,le,Le,Je,_t)}catch(dn){if(mt(At),dn!==dn+0)throw dn;gt(1,0)}}function Bs(w){var P=ht();try{return R(w)()}catch(H){if(mt(P),H!==H+0)throw H;gt(1,0)}}function Ma(w,P){var H=ht();try{return R(w)(P)}catch(z){if(mt(H),z!==z+0)throw z;return gt(1,0),0n}}function Ko(w){var P=ht();try{return R(w)()}catch(H){if(mt(P),H!==H+0)throw H;return gt(1,0),0n}}function Zo(w,P,H,z){var q=ht();try{return R(w)(P,H,z)}catch(le){if(mt(q),le!==le+0)throw le;gt(1,0)}}function Jo(w,P,H,z,q){var le=ht();try{return R(w)(P,H,z,q)}catch(Le){if(mt(le),Le!==Le+0)throw Le;gt(1,0)}}function jr(w,P,H,z,q,le){var Le=ht();try{return R(w)(P,H,z,q,le)}catch(Je){if(mt(Le),Je!==Je+0)throw Je;gt(1,0)}}function Xr(w,P,H,z,q,le){var Le=ht();try{return R(w)(P,H,z,q,le)}catch(Je){if(mt(Le),Je!==Je+0)throw Je;gt(1,0)}}function zs(w,P,H,z,q,le,Le,Je){var _t=ht();try{return R(w)(P,H,z,q,le,Le,Je)}catch(At){if(mt(_t),At!==At+0)throw At;gt(1,0)}}function Qo(w,P,H,z,q){var le=ht();try{return R(w)(P,H,z,q)}catch(Le){if(mt(le),Le!==Le+0)throw Le;return gt(1,0),0n}}function el(w,P,H,z){var q=ht();try{return R(w)(P,H,z)}catch(le){if(mt(q),le!==le+0)throw le;gt(1,0)}}function tl(w,P,H,z){var q=ht();try{return R(w)(P,H,z)}catch(le){if(mt(q),le!==le+0)throw le;gt(1,0)}}function Ta(w,P,H,z,q,le,Le,Je,_t,At,dn,Hn){var ri=ht();try{return R(w)(P,H,z,q,le,Le,Je,_t,At,dn,Hn)}catch(xn){if(mt(ri),xn!==xn+0)throw xn;gt(1,0)}}function nl(w,P,H,z,q,le,Le,Je,_t,At,dn){var Hn=ht();try{R(w)(P,H,z,q,le,Le,Je,_t,At,dn)}catch(ri){if(mt(Hn),ri!==ri+0)throw ri;gt(1,0)}}function il(w,P,H,z,q,le,Le,Je,_t,At,dn,Hn,ri,xn,rl,Ra){var sl=ht();try{R(w)(P,H,z,q,le,Le,Je,_t,At,dn,Hn,ri,xn,rl,Ra)}catch(Vs){if(mt(sl),Vs!==Vs+0)throw Vs;gt(1,0)}}function Aa(w,P,H){var z=ht();try{return R(w)(P,H)}catch(q){if(mt(z),q!==q+0)throw q;gt(1,0)}}function Kn(w,P,H){var z=ht();try{return R(w)(P,H)}catch(q){if(mt(z),q!==q+0)throw q;gt(1,0)}}function Hs(w,P,H,z){var q=ht();try{R(w)(P,H,z)}catch(le){if(mt(q),le!==le+0)throw le;gt(1,0)}}function tn(){if(0<de)ye=tn;else if(r)v?.(e),Ee();else{for(var w=Qe;0<w.length;)w.shift()(e);0<de?ye=tn:(e.calledRun=!0,F||(Ee(),v?.(e)))}}return r||(Bn=await at(),tn()),e.PTR_SIZE=4,pe?e:new Promise((w,P)=>{v=w,b=P})}var Ad,vh,L0=Ut(()=>{Ad=_h,vh=globalThis.self?.name?.startsWith("em-pthread"),vh&&_h()}),vl,pc,yh,Wn,Rd,Fa,xh,wh,yl,Eh,xl,Cd,wl,Pd,du=Ut(()=>{fu(),vl=typeof location>"u"?void 0:location.origin,pc=import.meta.url>"file:"&&import.meta.url<"file;",yh=()=>{{if(pc){let i=URL;return new URL(new i("ort.wasm.bundle.min.mjs",import.meta.url).href,vl).href}return import.meta.url}},Wn=yh(),Rd=()=>{if(Wn&&!Wn.startsWith("blob:"))return Wn.substring(0,Wn.lastIndexOf("/")+1)},Fa=(i,e)=>{try{let t=e??Wn;return(t?new URL(i,t):new URL(i)).origin===vl}catch{return!1}},xh=(i,e)=>{let t=e??Wn;try{return(t?new URL(i,t):new URL(i)).href}catch{return}},wh=(i,e)=>`${e??"./"}${i}`,yl=async i=>{let e=await(await fetch(i,{credentials:"same-origin"})).blob();return URL.createObjectURL(e)},Eh=async i=>(await import(i)).default,xl=(D0(),fc(Sd)).default,Cd=async()=>{if(!Wn)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Fa(Wn))return[void 0,xl()];let i=await yl(Wn);return[i,xl(i)]},wl=(L0(),fc(Td)).default,Pd=async(i,e,t,n)=>{let r=wl&&!(i||e);if(r)if(Wn)r=Fa(Wn)||n&&!t;else if(n&&!t)r=!0;else throw new Error("cannot determine the script source URL.");if(r)return[void 0,wl];{let a="ort-wasm-simd-threaded.mjs",l=i??xh(a,e),c=t&&l&&!Fa(l,e),f=c?await yl(l):l??wh(a,e);return[c?f:void 0,await Eh(f)]}}}),El,Ua,Xs,bl,bh,Sh,Mh,pu,en,As=Ut(()=>{du(),Ua=!1,Xs=!1,bl=!1,bh=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Sh=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Mh=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},pu=async i=>{if(Ua)return Promise.resolve();if(Xs)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(bl)throw new Error("previous call to 'initializeWebAssembly()' failed.");Xs=!0;let e=i.initTimeout,t=i.numThreads;if(i.simd!==!1){if(i.simd==="relaxed"){if(!Mh())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Sh())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let n=bh();t>1&&!n&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+t+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),i.numThreads=t=1);let r=i.wasmPaths,a=typeof r=="string"?r:void 0,l=r?.mjs,c=l?.href??l,f=r?.wasm,h=f?.href??f,m=i.wasmBinary,[p,g]=await Pd(c,a,t>1,!!m||!!h),v=!1,b=[];if(e>0&&b.push(new Promise(T=>{setTimeout(()=>{v=!0,T()},e)})),b.push(new Promise((T,x)=>{let _={numThreads:t};if(m)_.wasmBinary=m,_.locateFile=U=>U;else if(h||a)_.locateFile=U=>h??a+U;else if(c&&c.indexOf("blob:")!==0)_.locateFile=U=>new URL(U,c).href;else if(p){let U=Rd();U&&(_.locateFile=I=>U+I)}g(_).then(U=>{Xs=!1,Ua=!0,El=U,T(),p&&URL.revokeObjectURL(p)},U=>{Xs=!1,bl=!0,x(U)})})),await Promise.race(b),v)throw new Error(`WebAssembly backend initializing failed due to timeout: ${e}ms`)},en=()=>{if(Ua&&El)return El;throw new Error("WebAssembly is not initialized yet.")}}),li,bo,Yt,mu=Ut(()=>{As(),li=(i,e)=>{let t=en(),n=t.lengthBytesUTF8(i)+1,r=t._malloc(n);return t.stringToUTF8(i,r,n),e.push(r),r},bo=(i,e,t,n)=>{if(typeof i=="object"&&i!==null){if(t.has(i))throw new Error("Circular reference in options");t.add(i)}Object.entries(i).forEach(([r,a])=>{let l=e?e+r:r;if(typeof a=="object")bo(a,l+".",t,n);else if(typeof a=="string"||typeof a=="number")n(l,a.toString());else if(typeof a=="boolean")n(l,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},Yt=i=>{let e=en(),t=e.stackSave();try{let n=e.PTR_SIZE,r=e.stackAlloc(2*n);e._OrtGetLastError(r,r+n);let a=Number(e.getValue(r,n===4?"i32":"i64")),l=e.getValue(r+n,"*"),c=l?e.UTF8ToString(l):"";throw new Error(`${i} ERROR_CODE: ${a}, ERROR_MESSAGE: ${c}`)}finally{e.stackRestore(t)}}}),Dd,I0=Ut(()=>{As(),mu(),Dd=i=>{let e=en(),t=0,n=[],r=i||{};try{if(i?.logSeverityLevel===void 0)r.logSeverityLevel=2;else if(typeof i.logSeverityLevel!="number"||!Number.isInteger(i.logSeverityLevel)||i.logSeverityLevel<0||i.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${i.logSeverityLevel}`);if(i?.logVerbosityLevel===void 0)r.logVerbosityLevel=0;else if(typeof i.logVerbosityLevel!="number"||!Number.isInteger(i.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${i.logVerbosityLevel}`);i?.terminate===void 0&&(r.terminate=!1);let a=0;return i?.tag!==void 0&&(a=li(i.tag,n)),t=e._OrtCreateRunOptions(r.logSeverityLevel,r.logVerbosityLevel,!!r.terminate,a),t===0&&Yt("Can't create run options."),i?.extra!==void 0&&bo(i.extra,"",new WeakSet,(l,c)=>{let f=li(l,n),h=li(c,n);e._OrtAddRunConfigEntry(t,f,h)!==0&&Yt(`Can't set a run config entry: ${l} - ${c}.`)}),[t,n]}catch(a){throw t!==0&&e._OrtReleaseRunOptions(t),n.forEach(l=>e._free(l)),a}}}),Th,Ah,Rh,fr,Ch,Ld,F0=Ut(()=>{As(),mu(),Th=i=>{switch(i){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${i}`)}},Ah=i=>{switch(i){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${i}`)}},Rh=i=>{i.extra||(i.extra={}),i.extra.session||(i.extra.session={});let e=i.extra.session;e.use_ort_model_bytes_directly||(e.use_ort_model_bytes_directly="1"),i.executionProviders&&i.executionProviders.some(t=>(typeof t=="string"?t:t.name)==="webgpu")&&(i.enableMemPattern=!1)},fr=(i,e,t,n)=>{let r=li(e,n),a=li(t,n);en()._OrtAddSessionConfigEntry(i,r,a)!==0&&Yt(`Can't set a session config entry: ${e} - ${t}.`)},Ch=async(i,e,t)=>{let n=e.executionProviders;for(let r of n){let a=typeof r=="string"?r:r.name,l=[];switch(a){case"webnn":if(a="WEBNN",fr(i,"session.disable_quant_qdq","1",t),fr(i,"session.disable_qdq_constant_folding","1",t),typeof r!="string"){let p=r?.deviceType;p&&fr(i,"deviceType",p,t)}break;case"webgpu":if(a="JS",typeof r!="string"){let p=r;if(p?.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);fr(i,"preferredLayout",p.preferredLayout,t)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let c=li(a,t),f=l.length,h=0,m=0;if(f>0){h=en()._malloc(f*en().PTR_SIZE),t.push(h),m=en()._malloc(f*en().PTR_SIZE),t.push(m);for(let p=0;p<f;p++)en().setValue(h+p*en().PTR_SIZE,l[p][0],"*"),en().setValue(m+p*en().PTR_SIZE,l[p][1],"*")}await en()._OrtAppendExecutionProvider(i,c,h,m,f)!==0&&Yt(`Can't append execution provider: ${a}.`)}},Ld=async i=>{let e=en(),t=0,n=[],r=i||{};Rh(r);try{let a=Th(r.graphOptimizationLevel??"all"),l=Ah(r.executionMode??"sequential"),c=typeof r.logId=="string"?li(r.logId,n):0,f=r.logSeverityLevel??2;if(!Number.isInteger(f)||f<0||f>4)throw new Error(`log severity level is not valid: ${f}`);let h=r.logVerbosityLevel??0;if(!Number.isInteger(h)||h<0||h>4)throw new Error(`log verbosity level is not valid: ${h}`);let m=typeof r.optimizedModelFilePath=="string"?li(r.optimizedModelFilePath,n):0;if(t=e._OrtCreateSessionOptions(a,!!r.enableCpuMemArena,!!r.enableMemPattern,l,!!r.enableProfiling,0,c,f,h,m),t===0&&Yt("Can't create session options."),r.executionProviders&&await Ch(t,r,n),r.enableGraphCapture!==void 0){if(typeof r.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${r.enableGraphCapture}`);fr(t,"enableGraphCapture",r.enableGraphCapture.toString(),n)}if(r.freeDimensionOverrides)for(let[p,g]of Object.entries(r.freeDimensionOverrides)){if(typeof p!="string")throw new Error(`free dimension override name must be a string: ${p}`);if(typeof g!="number"||!Number.isInteger(g)||g<0)throw new Error(`free dimension override value must be a non-negative integer: ${g}`);let v=li(p,n);e._OrtAddFreeDimensionOverride(t,v,g)!==0&&Yt(`Can't set a free dimension override: ${p} - ${g}.`)}return r.extra!==void 0&&bo(r.extra,"",new WeakSet,(p,g)=>{fr(t,p,g,n)}),[t,n]}catch(a){throw t!==0&&e._OrtReleaseSessionOptions(t)!==0&&Yt("Can't release session options."),n.forEach(l=>e._free(l)),a}}}),hs,po,fs,Id,Fd,gu,_u,Ud,Nd=Ut(()=>{hs=i=>{switch(i){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${i}`)}},po=i=>{switch(i){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${i}`)}},fs=(i,e)=>{let t=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][i],n=typeof e=="number"?e:e.reduce((r,a)=>r*a,1);return t>0?Math.ceil(n*t):void 0},Id=i=>{switch(i){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${i}`)}},Fd=i=>{switch(i){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${i}`)}},gu=i=>i==="float32"||i==="float16"||i==="int32"||i==="int64"||i==="uint32"||i==="uint8"||i==="bool"||i==="uint4"||i==="int4",_u=i=>i==="float32"||i==="float16"||i==="int32"||i==="int64"||i==="uint32"||i==="uint64"||i==="int8"||i==="uint8"||i==="bool"||i==="uint4"||i==="int4",Ud=i=>{switch(i){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${i}`)}}}),vu,Od=Ut(()=>{fu(),vu=async i=>{if(typeof i=="string"){let e=await fetch(i);if(!e.ok)throw new Error(`failed to load external data file: ${i}`);let t=e.headers.get("Content-Length"),n=t?parseInt(t,10):0;if(n<1073741824)return new Uint8Array(await e.arrayBuffer());{if(!e.body)throw new Error(`failed to load external data file: ${i}, no response body.`);let r=e.body.getReader(),a;try{a=new ArrayBuffer(n)}catch(c){if(c instanceof RangeError){let f=Math.ceil(n/65536);a=new WebAssembly.Memory({initial:f,maximum:f}).buffer}else throw c}let l=0;for(;;){let{done:c,value:f}=await r.read();if(c)break;let h=f.byteLength;new Uint8Array(a,l,h).set(f),l+=h}return new Uint8Array(a,0,n)}}else return i instanceof Blob?new Uint8Array(await i.arrayBuffer()):i instanceof Uint8Array?i:new Uint8Array(i)}}),Ph,yu,xu,dr,Dh,Sl,So,wu,Eu,Ml,bu,Su,Mu,kd=Ut(()=>{Pr(),I0(),F0(),Nd(),As(),mu(),Od(),Ph=(i,e)=>{en()._OrtInit(i,e)!==0&&Yt("Can't initialize onnxruntime.")},yu=async i=>{Ph(i.wasm.numThreads,Fd(i.logLevel))},xu=async(i,e)=>{en().asyncInit?.();let t=i.webgpu.adapter;if(e==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(t){if(typeof t.limits!="object"||typeof t.features!="object"||typeof t.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=i.webgpu.powerPreference;if(n!==void 0&&n!=="low-power"&&n!=="high-performance")throw new Error(`Invalid powerPreference setting: "${n}"`);let r=i.webgpu.forceFallbackAdapter;if(r!==void 0&&typeof r!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${r}"`);if(t=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:r}),!t)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(e==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment")},dr=new Map,Dh=i=>{let e=en(),t=e.stackSave();try{let n=e.PTR_SIZE,r=e.stackAlloc(2*n);e._OrtGetInputOutputCount(i,r,r+n)!==0&&Yt("Can't get session input/output count.");let a=n===4?"i32":"i64";return[Number(e.getValue(r,a)),Number(e.getValue(r+n,a))]}finally{e.stackRestore(t)}},Sl=(i,e)=>{let t=en(),n=t.stackSave(),r=0;try{let a=t.PTR_SIZE,l=t.stackAlloc(2*a);t._OrtGetInputOutputMetadata(i,e,l,l+a)!==0&&Yt("Can't get session input/output metadata.");let c=Number(t.getValue(l,"*"));r=Number(t.getValue(l+a,"*"));let f=t.HEAP32[r/4];if(f===0)return[c,0];let h=t.HEAPU32[r/4+1],m=[];for(let p=0;p<h;p++){let g=Number(t.getValue(r+8+p*a,"*"));m.push(g!==0?t.UTF8ToString(g):Number(t.getValue(r+8+(p+h)*a,"*")))}return[c,f,m]}finally{t.stackRestore(n),r!==0&&t._OrtFree(r)}},So=i=>{let e=en(),t=e._malloc(i.byteLength);if(t===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${i.byteLength}.`);return e.HEAPU8.set(i,t),[t,i.byteLength]},wu=async(i,e)=>{let t,n,r=en();Array.isArray(i)?[t,n]=i:i.buffer===r.HEAPU8.buffer?[t,n]=[i.byteOffset,i.byteLength]:[t,n]=So(i);let a=0,l=0,c=[],f=[],h=[];try{if([l,c]=await Ld(e),e?.externalData&&r.mountExternalData){let U=[];for(let I of e.externalData){let F=typeof I=="string"?I:I.path;U.push(vu(typeof I=="string"?I:I.data).then(V=>{r.mountExternalData(F,V)}))}await Promise.all(U)}for(let U of e?.executionProviders??[])if((typeof U=="string"?U:U.name)==="webnn"){if(r.shouldTransferToMLTensor=!1,typeof U!="string"){let I=U,F=I?.context,V=I?.gpuDevice,S=I?.deviceType,G=I?.powerPreference;F?r.currentContext=F:V?r.currentContext=await r.webnnCreateMLContext(V):r.currentContext=await r.webnnCreateMLContext({deviceType:S,powerPreference:G})}else r.currentContext=await r.webnnCreateMLContext();break}a=await r._OrtCreateSession(t,n,l),r.webgpuOnCreateSession?.(a),a===0&&Yt("Can't create a session."),r.jsepOnCreateSession?.(),r.currentContext&&(r.webnnRegisterMLContext(a,r.currentContext),r.currentContext=void 0,r.shouldTransferToMLTensor=!0);let[m,p]=Dh(a),g=!!e?.enableGraphCapture,v=[],b=[],T=[],x=[],_=[];for(let U=0;U<m;U++){let[I,F,V]=Sl(a,U);I===0&&Yt("Can't get an input name."),f.push(I);let S=r.UTF8ToString(I);v.push(S),T.push(F===0?{name:S,isTensor:!1}:{name:S,isTensor:!0,type:po(F),shape:V})}for(let U=0;U<p;U++){let[I,F,V]=Sl(a,U+m);I===0&&Yt("Can't get an output name."),h.push(I);let S=r.UTF8ToString(I);b.push(S),x.push(F===0?{name:S,isTensor:!1}:{name:S,isTensor:!0,type:po(F),shape:V})}return dr.set(a,[a,f,h,null,g,!1]),[a,v,b,T,x]}catch(m){throw f.forEach(p=>r._OrtFree(p)),h.forEach(p=>r._OrtFree(p)),a!==0&&r._OrtReleaseSession(a)!==0&&Yt("Can't release session."),m}finally{r._free(t),l!==0&&r._OrtReleaseSessionOptions(l)!==0&&Yt("Can't release session options."),c.forEach(m=>r._free(m)),r.unmountExternalData?.()}},Eu=i=>{let e=en(),t=dr.get(i);if(!t)throw new Error(`cannot release session. invalid session id: ${i}`);let[n,r,a,l,c]=t;l&&(c&&e._OrtClearBoundOutputs(l.handle)!==0&&Yt("Can't clear bound outputs."),e._OrtReleaseBinding(l.handle)!==0&&Yt("Can't release IO binding.")),e.jsepOnReleaseSession?.(i),e.webnnOnReleaseSession?.(i),e.webgpuOnReleaseSession?.(i),r.forEach(f=>e._OrtFree(f)),a.forEach(f=>e._OrtFree(f)),e._OrtReleaseSession(n)!==0&&Yt("Can't release session."),dr.delete(i)},Ml=async(i,e,t,n,r,a,l=!1)=>{if(!i){e.push(0);return}let c=en(),f=c.PTR_SIZE,h=i[0],m=i[1],p=i[3],g=p,v,b;if(h==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(l&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let _=i[2].gpuBuffer;b=fs(hs(h),m);{let U=c.jsepRegisterBuffer;if(!U)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');v=U(n,a,_,b)}}else if(p==="ml-tensor"){let _=i[2].mlTensor;b=fs(hs(h),m);let U=c.webnnRegisterMLTensor;if(!U)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');v=U(n,_,hs(h),m)}else{let _=i[2];if(Array.isArray(_)){b=f*_.length,v=c._malloc(b),t.push(v);for(let U=0;U<_.length;U++){if(typeof _[U]!="string")throw new TypeError(`tensor data at index ${U} is not a string`);c.setValue(v+U*f,li(_[U],t),"*")}}else{let U=c.webnnIsGraphInput,I=c.webnnIsGraphOutput;if(h!=="string"&&U&&I){let F=c.UTF8ToString(r);if(U(n,F)||I(n,F)){let V=hs(h);b=fs(V,m),g="ml-tensor";let S=c.webnnCreateTemporaryTensor,G=c.webnnUploadTensor;if(!S||!G)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let Y=await S(n,V,m);G(Y,new Uint8Array(_.buffer,_.byteOffset,_.byteLength)),v=Y}else b=_.byteLength,v=c._malloc(b),t.push(v),c.HEAPU8.set(new Uint8Array(_.buffer,_.byteOffset,b),v)}else b=_.byteLength,v=c._malloc(b),t.push(v),c.HEAPU8.set(new Uint8Array(_.buffer,_.byteOffset,b),v)}}let T=c.stackSave(),x=c.stackAlloc(4*m.length);try{m.forEach((U,I)=>c.setValue(x+I*f,U,f===4?"i32":"i64"));let _=c._OrtCreateTensor(hs(h),v,b,x,m.length,Ud(g));_===0&&Yt(`Can't create tensor for input/output. session=${n}, index=${a}.`),e.push(_)}finally{c.stackRestore(T)}},bu=async(i,e,t,n,r,a)=>{let l=en(),c=l.PTR_SIZE,f=dr.get(i);if(!f)throw new Error(`cannot run inference. invalid session id: ${i}`);let h=f[0],m=f[1],p=f[2],g=f[3],v=f[4];f[5];let b=e.length,T=n.length,x=0,_=[],U=[],I=[],F=[],V=[],S=l.stackSave(),G=l.stackAlloc(b*c),Y=l.stackAlloc(b*c),N=l.stackAlloc(T*c),A=l.stackAlloc(T*c);try{[x,_]=Dd(a),xs("wasm prepareInputOutputTensor");for(let Z=0;Z<b;Z++)await Ml(t[Z],U,F,i,m[e[Z]],e[Z],v);for(let Z=0;Z<T;Z++)await Ml(r[Z],I,F,i,p[n[Z]],b+n[Z],v);ws("wasm prepareInputOutputTensor");for(let Z=0;Z<b;Z++)l.setValue(G+Z*c,U[Z],"*"),l.setValue(Y+Z*c,m[e[Z]],"*");for(let Z=0;Z<T;Z++)l.setValue(N+Z*c,I[Z],"*"),l.setValue(A+Z*c,p[n[Z]],"*");l.jsepOnRunStart?.(h),l.webnnOnRunStart?.(h);let O;O=await l._OrtRun(h,Y,G,b,A,T,N,x),O!==0&&Yt("failed to call OrtRun().");let K=[],oe=[];xs("wasm ProcessOutputTensor");for(let Z=0;Z<T;Z++){let $=Number(l.getValue(N+Z*c,"*"));if($===I[Z]||V.includes(I[Z])){K.push(r[Z]),$!==I[Z]&&l._OrtReleaseTensor($)!==0&&Yt("Can't release tensor.");continue}let ee=l.stackSave(),pe=l.stackAlloc(4*c),se=!1,Ee,De=0;try{l._OrtGetTensorData($,pe,pe+c,pe+2*c,pe+3*c)!==0&&Yt(`Can't access output tensor data on index ${Z}.`);let je=c===4?"i32":"i64",at=Number(l.getValue(pe,je));De=l.getValue(pe+c,"*");let Et=l.getValue(pe+c*2,"*"),lt=Number(l.getValue(pe+c*3,je)),Qe=[];for(let ue=0;ue<lt;ue++)Qe.push(Number(l.getValue(Et+ue*c,je)));l._OrtFree(Et)!==0&&Yt("Can't free memory for tensor dims.");let de=Qe.reduce((ue,_e)=>ue*_e,1);Ee=po(at);let ye=g?.outputPreferredLocations[n[Z]];if(Ee==="string"){if(ye==="gpu-buffer"||ye==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ue=[];for(let _e=0;_e<de;_e++){let Ae=l.getValue(De+_e*c,"*"),dt=l.getValue(De+(_e+1)*c,"*"),Nt=_e===de-1?void 0:dt-Ae;ue.push(l.UTF8ToString(Ae,Nt))}K.push([Ee,Qe,ue,"cpu"])}else if(ye==="gpu-buffer"&&de>0){let ue=l.jsepGetBuffer;if(!ue)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let _e=ue(De),Ae=fs(at,de);if(Ae===void 0||!gu(Ee))throw new Error(`Unsupported data type: ${Ee}`);se=!0,K.push([Ee,Qe,{gpuBuffer:_e,download:l.jsepCreateDownloader(_e,Ae,Ee),dispose:()=>{l._OrtReleaseTensor($)!==0&&Yt("Can't release tensor.")}},"gpu-buffer"])}else if(ye==="ml-tensor"&&de>0){let ue=l.webnnEnsureTensor,_e=l.webnnIsGraphInputOutputTypeSupported;if(!ue||!_e)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(fs(at,de)===void 0||!_u(Ee))throw new Error(`Unsupported data type: ${Ee}`);if(!_e(i,Ee,!1))throw new Error(`preferredLocation "ml-tensor" for ${Ee} output is not supported by current WebNN Context.`);let Ae=await ue(i,De,at,Qe,!1);se=!0,K.push([Ee,Qe,{mlTensor:Ae,download:l.webnnCreateMLTensorDownloader(De,Ee),dispose:()=>{l.webnnReleaseTensorId(De),l._OrtReleaseTensor($)}},"ml-tensor"])}else if(ye==="ml-tensor-cpu-output"&&de>0){let ue=l.webnnCreateMLTensorDownloader(De,Ee)(),_e=K.length;se=!0,oe.push((async()=>{let Ae=[_e,await ue];return l.webnnReleaseTensorId(De),l._OrtReleaseTensor($),Ae})()),K.push([Ee,Qe,[],"cpu"])}else{let ue=Id(Ee),_e=new ue(de);new Uint8Array(_e.buffer,_e.byteOffset,_e.byteLength).set(l.HEAPU8.subarray(De,De+_e.byteLength)),K.push([Ee,Qe,_e,"cpu"])}}finally{l.stackRestore(ee),Ee==="string"&&De&&l._free(De),se||l._OrtReleaseTensor($)}}g&&!v&&(l._OrtClearBoundOutputs(g.handle)!==0&&Yt("Can't clear bound outputs."),dr.set(i,[h,m,p,g,v,!1]));for(let[Z,$]of await Promise.all(oe))K[Z][2]=$;return ws("wasm ProcessOutputTensor"),K}finally{l.webnnOnRunEnd?.(h),l.stackRestore(S),U.forEach(O=>l._OrtReleaseTensor(O)),I.forEach(O=>l._OrtReleaseTensor(O)),F.forEach(O=>l._free(O)),x!==0&&l._OrtReleaseRunOptions(x),_.forEach(O=>l._free(O))}},Su=i=>{let e=en(),t=dr.get(i);if(!t)throw new Error("invalid session id");let n=t[0],r=e._OrtEndProfiling(n);r===0&&Yt("Can't get an profile file name."),e._OrtFree(r)},Mu=i=>{let e=[];for(let t of i){let n=t[2];!Array.isArray(n)&&"buffer"in n&&e.push(n.buffer)}return e}}),Vi,Zn,qr,qs,Ys,Na,Tl,Oa,pr,mr,Lh,Bd,zd,Hd,Vd,Gd,Wd,$d,jd=Ut(()=>{Pr(),kd(),As(),du(),Vi=()=>!!Jt.wasm.proxy&&typeof document<"u",qr=!1,qs=!1,Ys=!1,Oa=new Map,pr=(i,e)=>{let t=Oa.get(i);t?t.push(e):Oa.set(i,[e])},mr=()=>{if(qr||!qs||Ys||!Zn)throw new Error("worker not ready")},Lh=i=>{switch(i.data.type){case"init-wasm":qr=!1,i.data.err?(Ys=!0,Tl[1](i.data.err)):(qs=!0,Tl[0]()),Na&&(URL.revokeObjectURL(Na),Na=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let e=Oa.get(i.data.type);i.data.err?e.shift()[1](i.data.err):e.shift()[0](i.data.out);break}}},Bd=async()=>{if(!qs){if(qr)throw new Error("multiple calls to 'initWasm()' detected.");if(Ys)throw new Error("previous call to 'initWasm()' failed.");if(qr=!0,Vi())return new Promise((i,e)=>{Zn?.terminate(),Cd().then(([t,n])=>{try{Zn=n,Zn.onerror=a=>e(a),Zn.onmessage=Lh,Tl=[i,e];let r={type:"init-wasm",in:Jt};!r.in.wasm.wasmPaths&&(t||pc)&&(r.in.wasm.wasmPaths={wasm:new URL(""+new URL("ort-wasm-simd-threaded-Cpm-ox6i.wasm",import.meta.url).href,import.meta.url).href}),Zn.postMessage(r),Na=t}catch(r){e(r)}},e)});try{await pu(Jt.wasm),await yu(Jt),qs=!0}catch(i){throw Ys=!0,i}finally{qr=!1}}},zd=async i=>{if(Vi())return mr(),new Promise((e,t)=>{pr("init-ep",[e,t]);let n={type:"init-ep",in:{epName:i,env:Jt}};Zn.postMessage(n)});await xu(Jt,i)},Hd=async i=>Vi()?(mr(),new Promise((e,t)=>{pr("copy-from",[e,t]);let n={type:"copy-from",in:{buffer:i}};Zn.postMessage(n,[i.buffer])})):So(i),Vd=async(i,e)=>{if(Vi()){if(e?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return mr(),new Promise((t,n)=>{pr("create",[t,n]);let r={type:"create",in:{model:i,options:{...e}}},a=[];i instanceof Uint8Array&&a.push(i.buffer),Zn.postMessage(r,a)})}else return wu(i,e)},Gd=async i=>{if(Vi())return mr(),new Promise((e,t)=>{pr("release",[e,t]);let n={type:"release",in:i};Zn.postMessage(n)});Eu(i)},Wd=async(i,e,t,n,r,a)=>{if(Vi()){if(t.some(l=>l[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(r.some(l=>l))throw new Error("pre-allocated output tensor is not supported for proxy.");return mr(),new Promise((l,c)=>{pr("run",[l,c]);let f=t,h={type:"run",in:{sessionId:i,inputIndices:e,inputs:f,outputIndices:n,options:a}};Zn.postMessage(h,Mu(f))})}else return bu(i,e,t,n,r,a)},$d=async i=>{if(Vi())return mr(),new Promise((e,t)=>{pr("end-profiling",[e,t]);let n={type:"end-profiling",in:i};Zn.postMessage(n)});Su(i)}}),Al,Ih,Xd,U0=Ut(()=>{Pr(),jd(),Nd(),fu(),Od(),Al=(i,e)=>{switch(i.location){case"cpu":return[i.type,i.dims,i.data,"cpu"];case"gpu-buffer":return[i.type,i.dims,{gpuBuffer:i.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[i.type,i.dims,{mlTensor:i.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${i.location} for ${e()}`)}},Ih=i=>{switch(i[3]){case"cpu":return new ci(i[0],i[2],i[1]);case"gpu-buffer":{let e=i[0];if(!gu(e))throw new Error(`not supported data type: ${e} for deserializing GPU tensor`);let{gpuBuffer:t,download:n,dispose:r}=i[2];return ci.fromGpuBuffer(t,{dataType:e,dims:i[1],download:n,dispose:r})}case"ml-tensor":{let e=i[0];if(!_u(e))throw new Error(`not supported data type: ${e} for deserializing MLTensor tensor`);let{mlTensor:t,download:n,dispose:r}=i[2];return ci.fromMLTensor(t,{dataType:e,dims:i[1],download:n,dispose:r})}default:throw new Error(`invalid data location: ${i[3]}`)}},Xd=class{async fetchModelAndCopyToWasmMemory(i){return Hd(await vu(i))}async loadModel(i,e){vs();let t;typeof i=="string"?t=await this.fetchModelAndCopyToWasmMemory(i):t=i,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Vd(t,e),ys()}async dispose(){return Gd(this.sessionId)}async run(i,e,t){vs();let n=[],r=[];Object.entries(i).forEach(p=>{let g=p[0],v=p[1],b=this.inputNames.indexOf(g);if(b===-1)throw new Error(`invalid input '${g}'`);n.push(v),r.push(b)});let a=[],l=[];Object.entries(e).forEach(p=>{let g=p[0],v=p[1],b=this.outputNames.indexOf(g);if(b===-1)throw new Error(`invalid output '${g}'`);a.push(v),l.push(b)});let c=n.map((p,g)=>Al(p,()=>`input "${this.inputNames[r[g]]}"`)),f=a.map((p,g)=>p?Al(p,()=>`output "${this.outputNames[l[g]]}"`):null),h=await Wd(this.sessionId,r,c,l,f,t),m={};for(let p=0;p<h.length;p++)m[this.outputNames[l[p]]]=a[p]??Ih(h[p]);return ys(),m}startProfiling(){}endProfiling(){$d(this.sessionId)}}}),qd={};Po(qd,{OnnxruntimeWebAssemblyBackend:()=>gc,initializeFlags:()=>mc,wasmBackend:()=>Yd});var mc,gc,Yd,N0=Ut(()=>{Pr(),jd(),U0(),mc=()=>{(typeof Jt.wasm.initTimeout!="number"||Jt.wasm.initTimeout<0)&&(Jt.wasm.initTimeout=0);let i=Jt.wasm.simd;if(typeof i!="boolean"&&i!==void 0&&i!=="fixed"&&i!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${i}". Reset it to \`false\` and ignore SIMD feature checking.`),Jt.wasm.simd=!1),typeof Jt.wasm.proxy!="boolean"&&(Jt.wasm.proxy=!1),typeof Jt.wasm.trace!="boolean"&&(Jt.wasm.trace=!1),typeof Jt.wasm.numThreads!="number"||!Number.isInteger(Jt.wasm.numThreads)||Jt.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Jt.wasm.numThreads=1;else{let e=typeof navigator>"u"?m0("node:os").cpus().length:navigator.hardwareConcurrency;Jt.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},gc=class{async init(i){mc(),await Bd(),await zd(i)}async createInferenceSessionHandler(i,e){let t=new Xd;return await t.loadModel(i,e),t}},Yd=new gc});Pr();Pr();Pr();var O0="1.27.0";{let i=(N0(),fc(qd)).wasmBackend;Eo("cpu",i,10),Eo("wasm",i,10)}Object.defineProperty(Jt.versions,"web",{value:O0,enumerable:!0});const k0=""+new URL("ort-wasm-simd-threaded-Cpm-ox6i.wasm",import.meta.url).href;class Kd{constructor(e){this.type=e.type,this.baseDim=Number(e.baseDim??e.frameSize),this.historyLength=Number(e.history_len),this.scale=Number(e.scale??1),this.clip=e.clip??null,this.buffer=new Float32Array(this.baseDim*this.historyLength),this.current=new Float32Array(this.baseDim)}process(e){if(e.length!==this.baseDim)throw new Error(`${this.type} produced ${e.length} values, expected ${this.baseDim}`);const t=this.clip?Number(this.clip[0]):-1/0,n=this.clip?Number(this.clip[1]):1/0;for(let r=0;r<this.baseDim;r++)this.current[r]=Math.min(n,Math.max(t,Number(e[r])*this.scale));return this.current}prime(e){const t=this.process(e);for(let n=0;n<this.historyLength;n++)this.buffer.set(t,n*this.baseDim)}append(e){this.historyLength>1&&this.buffer.copyWithin(0,this.baseDim),this.buffer.set(this.process(e),(this.historyLength-1)*this.baseDim)}}class Fh extends Kd{constructor(e){super(e),this.skipFrames=Number(e.params?.history_skip_frames??1),this.lastSequence=null,this.rawFrames=[]}reset(){this.buffer.fill(0),this.lastSequence=null,this.rawFrames=[]}writeStrided(){const e=this.rawFrames.length,t=this.skipFrames;for(let n=0;n<this.historyLength;n++){const r=Math.max(0,e-1-(this.historyLength-1-n)*t);this.buffer.set(this.process(this.rawFrames[r]),n*this.baseDim)}}primeFrame(e,t){this.rawFrames=[Float32Array.from(e)],this.lastSequence=t,this.writeStrided()}updateFrame(e,t){if(!(t===0||t===this.lastSequence)){this.lastSequence=t,this.rawFrames.push(Float32Array.from(e));const n=(this.historyLength-1)*this.skipFrames+1;this.rawFrames.length>n&&this.rawFrames.splice(0,this.rawFrames.length-n),this.writeStrided()}}}class B0{constructor(e){this.manifest=e,this.defaultQpos=Float32Array.from(e.robot.defaultQpos),this.specs=e.observation.observations,this.terms=new Map,this.orderedPropTerms=[],this.previousAction=null,this.depth=null;for(const t of this.specs){const n=t.type==="depth"?new Fh(t):new Kd(t);this.terms.set(t.type,n),t.type==="depth"?this.depth=n:this.orderedPropTerms.push(n),t.type==="prev_action"&&(this.previousAction=n)}if(!this.depth||!this.previousAction)throw new Error("policy observation must include depth and prev_action");this.prop=new Float32Array(e.observation.propSize),this.gravity=new Float32Array(3),this.relativeJointPosition=new Float32Array(this.defaultQpos.length),this.commandClipped=new Float32Array(3),this.primeOnReset=!!e.policy.obsPrimeOnReset,this.primed=!1}reset(){for(const e of this.terms.values())e.buffer.fill(0),e instanceof Fh&&e.reset();this.primed=!1}#e(e,t,n){switch(e.type){case"base_ang_vel":return t.gyro;case"projected_gravity":return Qv(t.quaternion,this.gravity);case"command":{const r=this.specs.find(a=>a.type==="command").command_range;for(let a=0;a<3;a++)this.commandClipped[a]=Math.min(r[a][1],Math.max(r[a][0],n[a]));return this.commandClipped}case"joint_pos_rel":for(let r=0;r<this.relativeJointPosition.length;r++)this.relativeJointPosition[r]=t.q[r]-this.defaultQpos[r];return this.relativeJointPosition;case"joint_pos":return t.q;case"joint_vel":return t.dq;case"prev_action":return new Float32Array(e.baseDim);default:throw new Error(`unsupported observation term: ${e.type}`)}}update(e,t,n,r){if(this.primed){for(const l of this.orderedPropTerms)l!==this.previousAction&&l.append(this.#e(l,e,t));this.depth.updateFrame(n,r)}else{for(const l of this.orderedPropTerms){if(l===this.previousAction)continue;const c=this.#e(l,e,t);this.primeOnReset?l.prime(c):l.append(c)}this.primeOnReset?this.depth.primeFrame(n,r):this.depth.updateFrame(n,r),this.primed=!0}let a=0;for(const l of this.orderedPropTerms)this.prop.set(l.buffer,a),a+=l.buffer.length;if(a!==this.prop.length)throw new Error(`assembled proprioception ${a}, expected ${this.prop.length}`);return{prop:this.prop,depth:this.depth.buffer}}recordAction(e){this.previousAction.append(e)}}function Gi(i,e,t){return new ci(i,e,t)}function Uh(i){return i.reduce((e,t)=>e*(typeof t=="number"?t:1),1)}function Nh(i,e){const t=i.inputMetadata?.find?.(n=>n.name===e)??i.inputMetadata?.[e];return t?.dimensions??t?.dims??null}class Tu{static async create(e,t=null){Jt.wasm.numThreads=1,Jt.wasm.proxy=!1,Jt.wasm.wasmPaths={wasm:k0};const n={executionProviders:["wasm"],graphOptimizationLevel:"all"},r=[["actor",e.policy.actorUrl],["encoder",e.policy.encoderUrl]];e.policy.gateHoldUrl&&r.push(["gateHold",e.policy.gateHoldUrl]);const a={};return await Promise.all(r.map(async([l,c])=>{a[l]=await hu.create(new URL(c,document.baseURI).href,n),t?.(l)})),new Tu(e,a)}constructor(e,t){this.manifest=e,this.config=e.policy,this.actor=t.actor,this.encoder=t.encoder,this.gateHold=t.gateHold??null,this.observation=new B0(e),this.actorObs=new Float32Array(e.observation.propSize+32),this.targetQ=Float32Array.from(e.robot.defaultQpos),this.rawAction=new Float32Array(this.config.actionDim),this.previousAction=new Float32Array(this.config.actionDim);const n=Nh(this.actor,"h_in")??[1,1,32];this.hShape=n.map(a=>typeof a=="number"?a:1),this.hState=new Float32Array(Uh(this.hShape));const r=Nh(this.actor,"c_in");this.cShape=r?.map(a=>typeof a=="number"?a:1)??null,this.cState=this.cShape?new Float32Array(Uh(this.cShape)):null,this.gateState=new Float32Array(1),this.gateValid=new Float32Array(1),this.gateOpen=new Uint8Array(1),this.lastGate=new Float32Array(1),this.gateUpdateStep=0,this.reset()}reset(){this.observation.reset(),this.hState.fill(0),this.cState?.fill(0),this.gateUpdateStep=0;const e=this.config.gate.initialOpen?1:0;this.gateState.fill(e),this.gateValid.fill(e),this.gateOpen.fill(e),this.lastGate.fill(this.config.gate.mode==="manual"?this.config.gate.value:e),this.rawAction.fill(0),this.previousAction.fill(0),this.targetQ.set(this.manifest.robot.defaultQpos)}#e(){return this.gateUpdateStep++,this.gateUpdateStep<this.config.gate.decimation?!1:(this.gateUpdateStep=0,!0)}async compute(e,t,n,r){const a=this.observation.update(e,t,n,r),l=[1,Number(this.manifest.observation.depth.history_len),Number(this.manifest.observation.depth.params.height),Number(this.manifest.observation.depth.params.width)],f=(await this.encoder.run({[this.config.depthInputName]:Gi("float32",a.depth,l)}))[this.config.depthOutputName].data;a.prop.length+f.length!==this.actorObs.length&&(this.actorObs=new Float32Array(a.prop.length+f.length)),this.actorObs.set(a.prop),this.actorObs.set(f,a.prop.length);const h={[this.config.actorInputName]:Gi("float32",this.actorObs,[1,this.actorObs.length]),h_in:Gi("float32",this.hState,this.hShape)};this.cState&&(h.c_in=Gi("float32",this.cState,this.cShape));let m=this.config.gate.mode==="policy"&&this.#e();this.config.gate.mode==="policy"&&!this.gateHold&&(m||this.missingHoldWarned||(this.missingHoldWarned=!0,console.warn("gate decimation needs actor_gate_hold; this actor has no hold graph, so the gate still updates every policy step")),m=!0);let p=this.actor;if(m)h.gate_in=Gi("float32",this.gateState,[1,1]),h.gate_valid_in=Gi("float32",this.gateValid,[1,1]),h.gate_open_in=Gi("bool",this.gateOpen,[1,1]);else{if(this.config.gate.mode==="policy")p=this.gateHoldh.gate=Gi("float32",this.config.gate.mode==="manual"?Float32Array.of(this.config.gate.value):this.lastGate,[1,1])}const g=await p.run(h);this.rawAction.set(g[this.config.actionOutputName].data),this.hState.set(g.h_out.data),this.cState&&this.cState.set(g.c_out.data),m?(this.gateState.set(g.gate_out.data),this.gateValid.set(g.gate_valid_out.data),g.gate_open_out?(this.gateOpen.set(g.gate_open_out.data),this.lastGate[0]=this.gateOpen[0]?1:0):this.lastGate.set(this.gateState)):this.lastGate.set(g.gate_out.data);const v=this.manifest.robot.actionScale,b=this.config.actionToJointIndices;for(let _=0;_<this.rawAction.length;_++)this.previousAction[_]=this.config.obsUseScaledPrevAction?this.rawAction[_]*v[_]:this.rawAction[_];this.observation.recordAction(this.previousAction);const T=this.config.rawActionClip==null?1/0:Number(this.config.rawActionClip),x=this.config.targetQClip??[-1/0,1/0];this.targetQ.set(this.manifest.robot.defaultQpos);for(let _=0;_<this.rawAction.length;_++){const U=Math.min(T,Math.max(-T,this.rawAction[_])),I=b[_],F=this.manifest.robot.defaultQpos[I]+v[_]*U;this.targetQ[I]=Math.min(x[1],Math.max(x[0],F))}return this.targetQ}}const Au="180",ms={ROTATE:0,DOLLY:1,PAN:2},ds={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},z0=0,Oh=1,H0=2,Zd=1,Jd=2,Li=3,Qi=0,Cn=1,Ii=2,Fi=0,gs=1,kh=2,Bh=3,zh=4,V0=5,Sr=100,G0=101,W0=102,$0=103,j0=104,X0=200,q0=201,Y0=202,K0=203,_c=204,vc=205,Z0=206,J0=207,Q0=208,ey=209,ty=210,ny=211,iy=212,ry=213,sy=214,yc=0,xc=1,wc=2,Es=3,Ec=4,bc=5,Sc=6,Mc=7,Do=0,ay=1,oy=2,Ji=0,ly=1,cy=2,uy=3,Qd=4,hy=5,fy=6,dy=7,ep=300,bs=301,Ss=302,Tc=303,Ac=304,Lo=306,Rc=1e3,Tr=1001,Cc=1002,Pn=1003,py=1004,ka=1005,wi=1006,Rl=1007,Ar=1008,hi=1009,tp=1010,np=1011,la=1012,Ru=1013,Cr=1014,Ei=1015,da=1016,Cu=1017,Pu=1018,ca=1020,ip=35902,rp=35899,sp=1021,ap=1022,ei=1023,ua=1026,ha=1027,Du=1028,Lu=1029,op=1030,Iu=1031,Fu=1033,mo=33776,go=33777,_o=33778,vo=33779,Pc=35840,Dc=35841,Lc=35842,Ic=35843,Fc=36196,Uc=37492,Nc=37496,Oc=37808,kc=37809,Bc=37810,zc=37811,Hc=37812,Vc=37813,Gc=37814,Wc=37815,$c=37816,jc=37817,Xc=37818,qc=37819,Yc=37820,Kc=37821,Zc=36492,Jc=36494,Qc=36495,eu=36283,tu=36284,nu=36285,iu=36286,my=3200,lp=3201,Io=0,gy=1,Zi="",Rn="srgb",Ms="srgb-linear",Mo="linear",Gt="srgb",Yr=7680,Hh=519,_y=512,vy=513,yy=514,cp=515,xy=516,wy=517,Ey=518,by=519,Vh=35044,Gh="300 es",bi=2e3,To=2001;class Dr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yo=Math.PI/180,ru=180/Math.PI;function pa(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]).toLowerCase()}function Pt(i,e,t){return Math.max(e,Math.min(t,i))}function Sy(i,e){return(i%e+e)%e}function Cl(i,e,t){return(1-t)*i+t*e}function Ks(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const My={DEG2RAD:yo};class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*r+e.x,this.y=a*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class er{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,l,c){let f=n[r+0],h=n[r+1],m=n[r+2],p=n[r+3];const g=a[l+0],v=a[l+1],b=a[l+2],T=a[l+3];if(c===0){e[t+0]=f,e[t+1]=h,e[t+2]=m,e[t+3]=p;return}if(c===1){e[t+0]=g,e[t+1]=v,e[t+2]=b,e[t+3]=T;return}if(p!==T||f!==g||h!==v||m!==b){let x=1-c;const _=f*g+h*v+m*b+p*T,U=_>=0?1:-1,I=1-_*_;if(I>Number.EPSILON){const V=Math.sqrt(I),S=Math.atan2(V,_*U);x=Math.sin(x*S)/V,c=Math.sin(c*S)/V}const F=c*U;if(f=f*x+g*F,h=h*x+v*F,m=m*x+b*F,p=p*x+T*F,x===1-c){const V=1/Math.sqrt(f*f+h*h+m*m+p*p);f*=V,h*=V,m*=V,p*=V}}e[t]=f,e[t+1]=h,e[t+2]=m,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,a,l){const c=n[r],f=n[r+1],h=n[r+2],m=n[r+3],p=a[l],g=a[l+1],v=a[l+2],b=a[l+3];return e[t]=c*b+m*p+f*v-h*g,e[t+1]=f*b+m*g+h*p-c*v,e[t+2]=h*b+m*v+c*g-f*p,e[t+3]=m*b-c*p-f*g-h*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,l=e._order,c=Math.cos,f=Math.sin,h=c(n/2),m=c(r/2),p=c(a/2),g=f(n/2),v=f(r/2),b=f(a/2);switch(l){case"XYZ":this._x=g*m*p+h*v*b,this._y=h*v*p-g*m*b,this._z=h*m*b+g*v*p,this._w=h*m*p-g*v*b;break;case"YXZ":this._x=g*m*p+h*v*b,this._y=h*v*p-g*m*b,this._z=h*m*b-g*v*p,this._w=h*m*p+g*v*b;break;case"ZXY":this._x=g*m*p-h*v*b,this._y=h*v*p+g*m*b,this._z=h*m*b+g*v*p,this._w=h*m*p-g*v*b;break;case"ZYX":this._x=g*m*p-h*v*b,this._y=h*v*p+g*m*b,this._z=h*m*b-g*v*p,this._w=h*m*p+g*v*b;break;case"YZX":this._x=g*m*p+h*v*b,this._y=h*v*p+g*m*b,this._z=h*m*b-g*v*p,this._w=h*m*p-g*v*b;break;case"XZY":this._x=g*m*p-h*v*b,this._y=h*v*p-g*m*b,this._z=h*m*b+g*v*p,this._w=h*m*p+g*v*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],l=t[1],c=t[5],f=t[9],h=t[2],m=t[6],p=t[10],g=n+c+p;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(m-f)*v,this._y=(a-h)*v,this._z=(l-r)*v}else if(n>c&&n>p){const v=2*Math.sqrt(1+n-c-p);this._w=(m-f)/v,this._x=.25*v,this._y=(r+l)/v,this._z=(a+h)/v}else if(c>p){const v=2*Math.sqrt(1+c-n-p);this._w=(a-h)/v,this._x=(r+l)/v,this._y=.25*v,this._z=(f+m)/v}else{const v=2*Math.sqrt(1+p-n-c);this._w=(l-r)/v,this._x=(a+h)/v,this._y=(f+m)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,l=e._w,c=t._x,f=t._y,h=t._z,m=t._w;return this._x=n*m+l*c+r*h-a*f,this._y=r*m+l*f+a*c-n*h,this._z=a*m+l*h+n*f-r*c,this._w=l*m-n*c-r*f-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,l=this._w;let c=l*e._w+n*e._x+r*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=l,this._x=n,this._y=r,this._z=a,this;const f=1-c*c;if(f<=Number.EPSILON){const v=1-t;return this._w=v*l+t*this._w,this._x=v*n+t*this._x,this._y=v*r+t*this._y,this._z=v*a+t*this._z,this.normalize(),this}const h=Math.sqrt(f),m=Math.atan2(h,c),p=Math.sin((1-t)*m)/h,g=Math.sin(t*m)/h;return this._w=l*p+this._w*g,this._x=n*p+this._x*g,this._y=r*p+this._y*g,this._z=a*p+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,n=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,l=e.y,c=e.z,f=e.w,h=2*(l*r-c*n),m=2*(c*t-a*r),p=2*(a*n-l*t);return this.x=t+f*h+l*p-c*m,this.y=n+f*m+c*h-a*p,this.z=r+f*p+a*m-l*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,l=t.x,c=t.y,f=t.z;return this.x=r*f-a*c,this.y=a*l-n*f,this.z=n*c-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pl.copy(this).projectOnVector(e),this.sub(Pl)}reflect(e){return this.sub(Pl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pl=new Q,Wh=new er;class yt{constructor(e,t,n,r,a,l,c,f,h){yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,f,h)}set(e,t,n,r,a,l,c,f,h){const m=this.elements;return m[0]=e,m[1]=r,m[2]=c,m[3]=t,m[4]=a,m[5]=f,m[6]=n,m[7]=l,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[3],f=n[6],h=n[1],m=n[4],p=n[7],g=n[2],v=n[5],b=n[8],T=r[0],x=r[3],_=r[6],U=r[1],I=r[4],F=r[7],V=r[2],S=r[5],G=r[8];return a[0]=l*T+c*U+f*V,a[3]=l*x+c*I+f*S,a[6]=l*_+c*F+f*G,a[1]=h*T+m*U+p*V,a[4]=h*x+m*I+p*S,a[7]=h*_+m*F+p*G,a[2]=g*T+v*U+b*V,a[5]=g*x+v*I+b*S,a[8]=g*_+v*F+b*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],f=e[6],h=e[7],m=e[8];return t*l*m-t*c*h-n*a*m+n*c*f+r*a*h-r*l*f}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],f=e[6],h=e[7],m=e[8],p=m*l-c*h,g=c*f-m*a,v=h*a-l*f,b=t*p+n*g+r*v;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=p*T,e[1]=(r*h-m*n)*T,e[2]=(c*n-r*l)*T,e[3]=g*T,e[4]=(m*t-r*f)*T,e[5]=(r*a-c*t)*T,e[6]=v*T,e[7]=(n*f-h*t)*T,e[8]=(l*t-n*a)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,l,c){const f=Math.cos(a),h=Math.sin(a);return this.set(n*f,n*h,-n*(f*l+h*c)+l+e,-r*h,r*f,-r*(-h*l+f*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Dl.makeScale(e,t)),this}rotate(e){return this.premultiply(Dl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dl=new yt;function up(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ao(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ty(){const i=Ao("canvas");return i.style.display="block",i}const $h={};function fa(i){i in $h||($h[i]=!0,console.warn(i))}function Ay(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const jh=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xh=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ry(){const i={enabled:!0,workingColorSpace:Ms,spaces:{},convert:function(r,a,l){return this.enabled===!1||a===l||!a||!l||(this.spaces[a].transfer===Gt&&(r.r=Ui(r.r),r.g=Ui(r.g),r.b=Ui(r.b)),this.spaces[a].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Gt&&(r.r=_s(r.r),r.g=_s(r.g),r.b=_s(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Zi?Mo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,l){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return fa("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return fa("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ms]:{primaries:e,whitePoint:n,transfer:Mo,toXYZ:jh,fromXYZ:Xh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:e,whitePoint:n,transfer:Gt,toXYZ:jh,fromXYZ:Xh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),i}const kt=Ry();function Ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Kr;class Cy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kr===void 0&&(Kr=Ao("canvas")),Kr.width=e.width,Kr.height=e.height;const r=Kr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Kr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ao("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=Ui(a[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ui(t[n]/255)*255):t[n]=Ui(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Py=0;class Uu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=pa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,c=r.length;l<c;l++)r[l].isDataTexture?a.push(Ll(r[l].image)):a.push(Ll(r[l]))}else a=Ll(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Ll(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cy.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dy=0;const Il=new Q;class Dn extends Dr{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,n=Tr,r=Tr,a=wi,l=Ar,c=ei,f=hi,h=Dn.DEFAULT_ANISOTROPY,m=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=pa(),this.name="",this.source=new Uu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=f,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Il).x}get height(){return this.source.getSize(Il).y}get depth(){return this.source.getSize(Il).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ep)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rc:e.x=e.x-Math.floor(e.x);break;case Tr:e.x=e.x<0?0:1;break;case Cc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rc:e.y=e.y-Math.floor(e.y);break;case Tr:e.y=e.y<0?0:1;break;case Cc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=ep;Dn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,n=0,r=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const f=e.elements,h=f[0],m=f[4],p=f[8],g=f[1],v=f[5],b=f[9],T=f[2],x=f[6],_=f[10];if(Math.abs(m-g)<.01&&Math.abs(p-T)<.01&&Math.abs(b-x)<.01){if(Math.abs(m+g)<.1&&Math.abs(p+T)<.1&&Math.abs(b+x)<.1&&Math.abs(h+v+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(h+1)/2,F=(v+1)/2,V=(_+1)/2,S=(m+g)/4,G=(p+T)/4,Y=(b+x)/4;return I>F&&I>V?I<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(I),r=S/n,a=G/n):F>V?F<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(F),n=S/r,a=Y/r):V<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(V),n=G/a,r=Y/a),this.set(n,r,a,t),this}let U=Math.sqrt((x-b)*(x-b)+(p-T)*(p-T)+(g-m)*(g-m));return Math.abs(U)<.001&&(U=1),this.x=(x-b)/U,this.y=(p-T)/U,this.z=(g-m)/U,this.w=Math.acos((h+v+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this.w=Pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this.w=Pt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ly extends Dr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t);const r={width:e,height:t,depth:n.depth},a=new Dn(r);this.textures=[];const l=n.count;for(let c=0;c<l;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:wi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Uu(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tr extends Ly{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class hp extends Dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Iy extends Dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lr{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=a.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,si):si.fromBufferAttribute(a,l),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ba.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ba.copy(n.boundingBox)),Ba.applyMatrix4(e.matrixWorld),this.union(Ba)}const r=e.children;for(let a=0,l=r.length;a<l;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),za.subVectors(this.max,Zs),Zr.subVectors(e.a,Zs),Jr.subVectors(e.b,Zs),Qr.subVectors(e.c,Zs),Wi.subVectors(Jr,Zr),$i.subVectors(Qr,Jr),gr.subVectors(Zr,Qr);let t=[0,-Wi.z,Wi.y,0,-$i.z,$i.y,0,-gr.z,gr.y,Wi.z,0,-Wi.x,$i.z,0,-$i.x,gr.z,0,-gr.x,-Wi.y,Wi.x,0,-$i.y,$i.x,0,-gr.y,gr.x,0];return!Fl(t,Zr,Jr,Qr,za)||(t=[1,0,0,0,1,0,0,0,1],!Fl(t,Zr,Jr,Qr,za))?!1:(Ha.crossVectors(Wi,$i),t=[Ha.x,Ha.y,Ha.z],Fl(t,Zr,Jr,Qr,za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mi=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],si=new Q,Ba=new Lr,Zr=new Q,Jr=new Q,Qr=new Q,Wi=new Q,$i=new Q,gr=new Q,Zs=new Q,za=new Q,Ha=new Q,_r=new Q;function Fl(i,e,t,n,r){for(let a=0,l=i.length-3;a<=l;a+=3){_r.fromArray(i,a);const c=r.x*Math.abs(_r.x)+r.y*Math.abs(_r.y)+r.z*Math.abs(_r.z),f=e.dot(_r),h=t.dot(_r),m=n.dot(_r);if(Math.max(-Math.max(f,h,m),Math.min(f,h,m))>c)return!1}return!0}const Fy=new Lr,Js=new Q,Ul=new Q;class Ir{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Fy.setFromPoints(e).getCenter(n);let r=0;for(let a=0,l=e.length;a<l;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const t=Js.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Js,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(Ul)),this.expandByPoint(Js.copy(e.center).sub(Ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ti=new Q,Nl=new Q,Va=new Q,ji=new Q,Ol=new Q,Ga=new Q,kl=new Q;class Fo{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Nl.copy(e).add(t).multiplyScalar(.5),Va.copy(t).sub(e).normalize(),ji.copy(this.origin).sub(Nl);const a=e.distanceTo(t)*.5,l=-this.direction.dot(Va),c=ji.dot(this.direction),f=-ji.dot(Va),h=ji.lengthSq(),m=Math.abs(1-l*l);let p,g,v,b;if(m>0)if(p=l*f-c,g=l*c-f,b=a*m,p>=0)if(g>=-b)if(g<=b){const T=1/m;p*=T,g*=T,v=p*(p+l*g+2*c)+g*(l*p+g+2*f)+h}else g=a,p=Math.max(0,-(l*g+c)),v=-p*p+g*(g+2*f)+h;else g=-a,p=Math.max(0,-(l*g+c)),v=-p*p+g*(g+2*f)+h;else g<=-b?(p=Math.max(0,-(-l*a+c)),g=p>0?-a:Math.min(Math.max(-a,-f),a),v=-p*p+g*(g+2*f)+h):g<=b?(p=0,g=Math.min(Math.max(-a,-f),a),v=g*(g+2*f)+h):(p=Math.max(0,-(l*a+c)),g=p>0?a:Math.min(Math.max(-a,-f),a),v=-p*p+g*(g+2*f)+h);else g=l>0?-a:a,p=Math.max(0,-(l*g+c)),v=-p*p+g*(g+2*f)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Nl).addScaledVector(Va,g),v}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);const n=Ti.dot(this.direction),r=Ti.dot(Ti)-n*n,a=e.radius*e.radius;if(r>a)return null;const l=Math.sqrt(a-r),c=n-l,f=n+l;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,l,c,f;const h=1/this.direction.x,m=1/this.direction.y,p=1/this.direction.z,g=this.origin;return h>=0?(n=(e.min.x-g.x)*h,r=(e.max.x-g.x)*h):(n=(e.max.x-g.x)*h,r=(e.min.x-g.x)*h),m>=0?(a=(e.min.y-g.y)*m,l=(e.max.y-g.y)*m):(a=(e.max.y-g.y)*m,l=(e.min.y-g.y)*m),n>l||a>r||((a>n||isNaN(n))&&(n=a),(l<r||isNaN(r))&&(r=l),p>=0?(c=(e.min.z-g.z)*p,f=(e.max.z-g.z)*p):(c=(e.max.z-g.z)*p,f=(e.min.z-g.z)*p),n>f||c>r)||((c>n||n!==n)&&(n=c),(f<r||r!==r)&&(r=f),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,n,r,a){Ol.subVectors(t,e),Ga.subVectors(n,e),kl.crossVectors(Ol,Ga);let l=this.direction.dot(kl),c;if(l>0){if(r)return null;c=1}else if(l<0)c=-1,l=-l;else return null;ji.subVectors(this.origin,e);const f=c*this.direction.dot(Ga.crossVectors(ji,Ga));if(f<0)return null;const h=c*this.direction.dot(Ol.cross(ji));if(h<0||f+h>l)return null;const m=-c*ji.dot(kl);return m<0?null:this.at(m/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,t,n,r,a,l,c,f,h,m,p,g,v,b,T,x){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,f,h,m,p,g,v,b,T,x)}set(e,t,n,r,a,l,c,f,h,m,p,g,v,b,T,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=a,_[5]=l,_[9]=c,_[13]=f,_[2]=h,_[6]=m,_[10]=p,_[14]=g,_[3]=v,_[7]=b,_[11]=T,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/es.setFromMatrixColumn(e,0).length(),a=1/es.setFromMatrixColumn(e,1).length(),l=1/es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,l=Math.cos(n),c=Math.sin(n),f=Math.cos(r),h=Math.sin(r),m=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const g=l*m,v=l*p,b=c*m,T=c*p;t[0]=f*m,t[4]=-f*p,t[8]=h,t[1]=v+b*h,t[5]=g-T*h,t[9]=-c*f,t[2]=T-g*h,t[6]=b+v*h,t[10]=l*f}else if(e.order==="YXZ"){const g=f*m,v=f*p,b=h*m,T=h*p;t[0]=g+T*c,t[4]=b*c-v,t[8]=l*h,t[1]=l*p,t[5]=l*m,t[9]=-c,t[2]=v*c-b,t[6]=T+g*c,t[10]=l*f}else if(e.order==="ZXY"){const g=f*m,v=f*p,b=h*m,T=h*p;t[0]=g-T*c,t[4]=-l*p,t[8]=b+v*c,t[1]=v+b*c,t[5]=l*m,t[9]=T-g*c,t[2]=-l*h,t[6]=c,t[10]=l*f}else if(e.order==="ZYX"){const g=l*m,v=l*p,b=c*m,T=c*p;t[0]=f*m,t[4]=b*h-v,t[8]=g*h+T,t[1]=f*p,t[5]=T*h+g,t[9]=v*h-b,t[2]=-h,t[6]=c*f,t[10]=l*f}else if(e.order==="YZX"){const g=l*f,v=l*h,b=c*f,T=c*h;t[0]=f*m,t[4]=T-g*p,t[8]=b*p+v,t[1]=p,t[5]=l*m,t[9]=-c*m,t[2]=-h*m,t[6]=v*p+b,t[10]=g-T*p}else if(e.order==="XZY"){const g=l*f,v=l*h,b=c*f,T=c*h;t[0]=f*m,t[4]=-p,t[8]=h*m,t[1]=g*p+T,t[5]=l*m,t[9]=v*p-b,t[2]=b*p-v,t[6]=c*m,t[10]=T*p+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uy,e,Ny)}lookAt(e,t,n){const r=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),Xi.crossVectors(n,Vn),Xi.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),Xi.crossVectors(n,Vn)),Xi.normalize(),Wa.crossVectors(Vn,Xi),r[0]=Xi.x,r[4]=Wa.x,r[8]=Vn.x,r[1]=Xi.y,r[5]=Wa.y,r[9]=Vn.y,r[2]=Xi.z,r[6]=Wa.z,r[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[4],f=n[8],h=n[12],m=n[1],p=n[5],g=n[9],v=n[13],b=n[2],T=n[6],x=n[10],_=n[14],U=n[3],I=n[7],F=n[11],V=n[15],S=r[0],G=r[4],Y=r[8],N=r[12],A=r[1],O=r[5],K=r[9],oe=r[13],Z=r[2],$=r[6],ee=r[10],pe=r[14],se=r[3],Ee=r[7],De=r[11],je=r[15];return a[0]=l*S+c*A+f*Z+h*se,a[4]=l*G+c*O+f*$+h*Ee,a[8]=l*Y+c*K+f*ee+h*De,a[12]=l*N+c*oe+f*pe+h*je,a[1]=m*S+p*A+g*Z+v*se,a[5]=m*G+p*O+g*$+v*Ee,a[9]=m*Y+p*K+g*ee+v*De,a[13]=m*N+p*oe+g*pe+v*je,a[2]=b*S+T*A+x*Z+_*se,a[6]=b*G+T*O+x*$+_*Ee,a[10]=b*Y+T*K+x*ee+_*De,a[14]=b*N+T*oe+x*pe+_*je,a[3]=U*S+I*A+F*Z+V*se,a[7]=U*G+I*O+F*$+V*Ee,a[11]=U*Y+I*K+F*ee+V*De,a[15]=U*N+I*oe+F*pe+V*je,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],l=e[1],c=e[5],f=e[9],h=e[13],m=e[2],p=e[6],g=e[10],v=e[14],b=e[3],T=e[7],x=e[11],_=e[15];return b*(+a*f*p-r*h*p-a*c*g+n*h*g+r*c*v-n*f*v)+T*(+t*f*v-t*h*g+a*l*g-r*l*v+r*h*m-a*f*m)+x*(+t*h*p-t*c*v-a*l*p+n*l*v+a*c*m-n*h*m)+_*(-r*c*m-t*f*p+t*c*g+r*l*p-n*l*g+n*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],f=e[6],h=e[7],m=e[8],p=e[9],g=e[10],v=e[11],b=e[12],T=e[13],x=e[14],_=e[15],U=p*x*h-T*g*h+T*f*v-c*x*v-p*f*_+c*g*_,I=b*g*h-m*x*h-b*f*v+l*x*v+m*f*_-l*g*_,F=m*T*h-b*p*h+b*c*v-l*T*v-m*c*_+l*p*_,V=b*p*f-m*T*f-b*c*g+l*T*g+m*c*x-l*p*x,S=t*U+n*I+r*F+a*V;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/S;return e[0]=U*G,e[1]=(T*g*a-p*x*a-T*r*v+n*x*v+p*r*_-n*g*_)*G,e[2]=(c*x*a-T*f*a+T*r*h-n*x*h-c*r*_+n*f*_)*G,e[3]=(p*f*a-c*g*a-p*r*h+n*g*h+c*r*v-n*f*v)*G,e[4]=I*G,e[5]=(m*x*a-b*g*a+b*r*v-t*x*v-m*r*_+t*g*_)*G,e[6]=(b*f*a-l*x*a-b*r*h+t*x*h+l*r*_-t*f*_)*G,e[7]=(l*g*a-m*f*a+m*r*h-t*g*h-l*r*v+t*f*v)*G,e[8]=F*G,e[9]=(b*p*a-m*T*a-b*n*v+t*T*v+m*n*_-t*p*_)*G,e[10]=(l*T*a-b*c*a+b*n*h-t*T*h-l*n*_+t*c*_)*G,e[11]=(m*c*a-l*p*a-m*n*h+t*p*h+l*n*v-t*c*v)*G,e[12]=V*G,e[13]=(m*T*r-b*p*r+b*n*g-t*T*g-m*n*x+t*p*x)*G,e[14]=(b*c*r-l*T*r-b*n*f+t*T*f+l*n*x-t*c*x)*G,e[15]=(l*p*r-m*c*r+m*n*f-t*p*f-l*n*g+t*c*g)*G,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,l=e.x,c=e.y,f=e.z,h=a*l,m=a*c;return this.set(h*l+n,h*c-r*f,h*f+r*c,0,h*c+r*f,m*c+n,m*f-r*l,0,h*f-r*c,m*f+r*l,a*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,l){return this.set(1,n,a,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,l=t._y,c=t._z,f=t._w,h=a+a,m=l+l,p=c+c,g=a*h,v=a*m,b=a*p,T=l*m,x=l*p,_=c*p,U=f*h,I=f*m,F=f*p,V=n.x,S=n.y,G=n.z;return r[0]=(1-(T+_))*V,r[1]=(v+F)*V,r[2]=(b-I)*V,r[3]=0,r[4]=(v-F)*S,r[5]=(1-(g+_))*S,r[6]=(x+U)*S,r[7]=0,r[8]=(b+I)*G,r[9]=(x-U)*G,r[10]=(1-(g+T))*G,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=es.set(r[0],r[1],r[2]).length();const l=es.set(r[4],r[5],r[6]).length(),c=es.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],ai.copy(this);const h=1/a,m=1/l,p=1/c;return ai.elements[0]*=h,ai.elements[1]*=h,ai.elements[2]*=h,ai.elements[4]*=m,ai.elements[5]*=m,ai.elements[6]*=m,ai.elements[8]*=p,ai.elements[9]*=p,ai.elements[10]*=p,t.setFromRotationMatrix(ai),n.x=a,n.y=l,n.z=c,this}makePerspective(e,t,n,r,a,l,c=bi,f=!1){const h=this.elements,m=2*a/(t-e),p=2*a/(n-r),g=(t+e)/(t-e),v=(n+r)/(n-r);let b,T;if(f)b=a/(l-a),T=l*a/(l-a);else if(c===bi)b=-(l+a)/(l-a),T=-2*l*a/(l-a);else if(c===To)b=-l/(l-a),T=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=m,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=p,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,a,l,c=bi,f=!1){const h=this.elements,m=2/(t-e),p=2/(n-r),g=-(t+e)/(t-e),v=-(n+r)/(n-r);let b,T;if(f)b=1/(l-a),T=l/(l-a);else if(c===bi)b=-2/(l-a),T=-(l+a)/(l-a);else if(c===To)b=-1/(l-a),T=-a/(l-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=m,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=p,h[9]=0,h[13]=v,h[2]=0,h[6]=0,h[10]=b,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const es=new Q,ai=new jt,Uy=new Q(0,0,0),Ny=new Q(1,1,1),Xi=new Q,Wa=new Q,Vn=new Q,qh=new jt,Yh=new er;class ti{constructor(e=0,t=0,n=0,r=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],l=r[4],c=r[8],f=r[1],h=r[5],m=r[9],p=r[2],g=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(Pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,v),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-p,v),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-Pt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(Pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-m,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class fp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Oy=0;const Kh=new Q,ts=new er,Ai=new jt,$a=new Q,Qs=new Q,ky=new Q,By=new er,Zh=new Q(1,0,0),Jh=new Q(0,1,0),Qh=new Q(0,0,1),ef={type:"added"},zy={type:"removed"},ns={type:"childadded",child:null},Bl={type:"childremoved",child:null};class un extends Dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new Q,t=new ti,n=new er,r=new Q(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new jt},normalMatrix:{value:new yt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(Zh,e)}rotateY(e){return this.rotateOnAxis(Jh,e)}rotateZ(e){return this.rotateOnAxis(Qh,e)}translateOnAxis(e,t){return Kh.copy(e).applyQuaternion(this.quaternion),this.position.add(Kh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zh,e)}translateY(e){return this.translateOnAxis(Jh,e)}translateZ(e){return this.translateOnAxis(Qh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$a.copy(e):$a.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Qs,$a,this.up):Ai.lookAt($a,Qs,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),ts.setFromRotationMatrix(Ai),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ef),ns.child=e,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zy),Bl.child=e,this.dispatchEvent(Bl),Bl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ef),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,ky),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,By,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let h=0,m=f.length;h<m;h++){const p=f[h];a(e.shapes,p)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,h=this.material.length;f<h;f++)c.push(a(e.materials,this.material[f]));r.material=c}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];r.animations.push(a(e.animations,f))}}if(t){const c=l(e.geometries),f=l(e.materials),h=l(e.textures),m=l(e.images),p=l(e.shapes),g=l(e.skeletons),v=l(e.animations),b=l(e.nodes);c.length>0&&(n.geometries=c),f.length>0&&(n.materials=f),h.length>0&&(n.textures=h),m.length>0&&(n.images=m),p.length>0&&(n.shapes=p),g.length>0&&(n.skeletons=g),v.length>0&&(n.animations=v),b.length>0&&(n.nodes=b)}return n.object=r,n;function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}un.DEFAULT_UP=new Q(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new Q,Ri=new Q,zl=new Q,Ci=new Q,is=new Q,rs=new Q,tf=new Q,Hl=new Q,Vl=new Q,Gl=new Q,Wl=new $t,$l=new $t,jl=new $t;class ui{constructor(e=new Q,t=new Q,n=new Q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),oi.subVectors(e,t),r.cross(oi);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){oi.subVectors(r,t),Ri.subVectors(n,t),zl.subVectors(e,t);const l=oi.dot(oi),c=oi.dot(Ri),f=oi.dot(zl),h=Ri.dot(Ri),m=Ri.dot(zl),p=l*h-c*c;if(p===0)return a.set(0,0,0),null;const g=1/p,v=(h*f-c*m)*g,b=(l*m-c*f)*g;return a.set(1-v-b,b,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,t,n,r,a,l,c,f){return this.getBarycoord(e,t,n,r,Ci)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,Ci.x),f.addScaledVector(l,Ci.y),f.addScaledVector(c,Ci.z),f)}static getInterpolatedAttribute(e,t,n,r,a,l){return Wl.setScalar(0),$l.setScalar(0),jl.setScalar(0),Wl.fromBufferAttribute(e,t),$l.fromBufferAttribute(e,n),jl.fromBufferAttribute(e,r),l.setScalar(0),l.addScaledVector(Wl,a.x),l.addScaledVector($l,a.y),l.addScaledVector(jl,a.z),l}static isFrontFacing(e,t,n,r){return oi.subVectors(n,t),Ri.subVectors(e,t),oi.cross(Ri).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),oi.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return ui.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let l,c;is.subVectors(r,n),rs.subVectors(a,n),Hl.subVectors(e,n);const f=is.dot(Hl),h=rs.dot(Hl);if(f<=0&&h<=0)return t.copy(n);Vl.subVectors(e,r);const m=is.dot(Vl),p=rs.dot(Vl);if(m>=0&&p<=m)return t.copy(r);const g=f*p-m*h;if(g<=0&&f>=0&&m<=0)return l=f/(f-m),t.copy(n).addScaledVector(is,l);Gl.subVectors(e,a);const v=is.dot(Gl),b=rs.dot(Gl);if(b>=0&&v<=b)return t.copy(a);const T=v*h-f*b;if(T<=0&&h>=0&&b<=0)return c=h/(h-b),t.copy(n).addScaledVector(rs,c);const x=m*b-v*p;if(x<=0&&p-m>=0&&v-b>=0)return tf.subVectors(a,r),c=(p-m)/(p-m+(v-b)),t.copy(r).addScaledVector(tf,c);const _=1/(x+T+g);return l=T*_,c=g*_,t.copy(n).addScaledVector(is,l).addScaledVector(rs,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},ja={h:0,s:0,l:0};function Xl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ft{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=kt.workingColorSpace){return this.r=e,this.g=t,this.b=n,kt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=kt.workingColorSpace){if(e=Sy(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=Xl(l,a,e+1/3),this.g=Xl(l,a,e),this.b=Xl(l,a,e-1/3)}return kt.colorSpaceToWorking(this,r),this}setStyle(e,t=Rn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=r[1],c=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rn){const n=dp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return kt.workingToColorSpace(bn.copy(this),e),Math.round(Pt(bn.r*255,0,255))*65536+Math.round(Pt(bn.g*255,0,255))*256+Math.round(Pt(bn.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=kt.workingColorSpace){kt.workingToColorSpace(bn.copy(this),t);const n=bn.r,r=bn.g,a=bn.b,l=Math.max(n,r,a),c=Math.min(n,r,a);let f,h;const m=(c+l)/2;if(c===l)f=0,h=0;else{const p=l-c;switch(h=m<=.5?p/(l+c):p/(2-l-c),l){case n:f=(r-a)/p+(r<a?6:0);break;case r:f=(a-n)/p+2;break;case a:f=(n-r)/p+4;break}f/=6}return e.h=f,e.s=h,e.l=m,e}getRGB(e,t=kt.workingColorSpace){return kt.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=Rn){kt.workingToColorSpace(bn.copy(this),e);const t=bn.r,n=bn.g,r=bn.b;return e!==Rn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(ja);const n=Cl(qi.h,ja.h,t),r=Cl(qi.s,ja.s,t),a=Cl(qi.l,ja.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new ft;ft.NAMES=dp;let Hy=0;class fi extends Dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=pa(),this.name="",this.type="Material",this.blending=gs,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=vc,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(n.blending=this.blending),this.side!==Qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_c&&(n.blendSrc=this.blendSrc),this.blendDst!==vc&&(n.blendDst=this.blendDst),this.blendEquation!==Sr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}if(t){const a=r(e.textures),l=r(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pp extends fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Do,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cn=new Q,Xa=new ct;let Vy=0;class On{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vh,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xa.fromBufferAttribute(this,t),Xa.applyMatrix3(e),this.setXY(t,Xa.x,Xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ks(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ks(t,this.array)),t}setX(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ks(t,this.array)),t}setY(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ks(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ks(t,this.array)),t}setW(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),n=Fn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),n=Fn(n,this.array),r=Fn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),n=Fn(n,this.array),r=Fn(r,this.array),a=Fn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vh&&(e.usage=this.usage),e}}class mp extends On{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class gp extends On{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class sn extends On{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Gy=0;const Jn=new jt,ql=new un,ss=new Q,Gn=new Lr,ea=new Lr,vn=new Q;class Ln extends Dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=pa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(up(e)?gp:mp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new yt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,n){return Jn.makeTranslation(e,t,n),this.applyMatrix4(Jn),this}scale(e,t,n){return Jn.makeScale(e,t,n),this.applyMatrix4(Jn),this}lookAt(e){return ql.lookAt(e),ql.updateMatrix(),this.applyMatrix4(ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const l=e[r];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new sn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Gn.setFromBufferAttribute(a),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const c=t[a];ea.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(Gn.min,ea.min),Gn.expandByPoint(vn),vn.addVectors(Gn.max,ea.max),Gn.expandByPoint(vn)):(Gn.expandByPoint(ea.min),Gn.expandByPoint(ea.max))}Gn.getCenter(n);let r=0;for(let a=0,l=e.count;a<l;a++)vn.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(vn));if(t)for(let a=0,l=t.length;a<l;a++){const c=t[a],f=this.morphTargetsRelative;for(let h=0,m=c.count;h<m;h++)vn.fromBufferAttribute(c,h),f&&(ss.fromBufferAttribute(e,h),vn.add(ss)),r=Math.max(r,n.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),c=[],f=[];for(let Y=0;Y<n.count;Y++)c[Y]=new Q,f[Y]=new Q;const h=new Q,m=new Q,p=new Q,g=new ct,v=new ct,b=new ct,T=new Q,x=new Q;function _(Y,N,A){h.fromBufferAttribute(n,Y),m.fromBufferAttribute(n,N),p.fromBufferAttribute(n,A),g.fromBufferAttribute(a,Y),v.fromBufferAttribute(a,N),b.fromBufferAttribute(a,A),m.sub(h),p.sub(h),v.sub(g),b.sub(g);const O=1/(v.x*b.y-b.x*v.y);isFinite(O)&&(T.copy(m).multiplyScalar(b.y).addScaledVector(p,-v.y).multiplyScalar(O),x.copy(p).multiplyScalar(v.x).addScaledVector(m,-b.x).multiplyScalar(O),c[Y].add(T),c[N].add(T),c[A].add(T),f[Y].add(x),f[N].add(x),f[A].add(x))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let Y=0,N=U.length;Y<N;++Y){const A=U[Y],O=A.start,K=A.count;for(let oe=O,Z=O+K;oe<Z;oe+=3)_(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const I=new Q,F=new Q,V=new Q,S=new Q;function G(Y){V.fromBufferAttribute(r,Y),S.copy(V);const N=c[Y];I.copy(N),I.sub(V.multiplyScalar(V.dot(N))).normalize(),F.crossVectors(S,N);const O=F.dot(f[Y])<0?-1:1;l.setXYZW(Y,I.x,I.y,I.z,O)}for(let Y=0,N=U.length;Y<N;++Y){const A=U[Y],O=A.start,K=A.count;for(let oe=O,Z=O+K;oe<Z;oe+=3)G(e.getX(oe+0)),G(e.getX(oe+1)),G(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,v=n.count;g<v;g++)n.setXYZ(g,0,0,0);const r=new Q,a=new Q,l=new Q,c=new Q,f=new Q,h=new Q,m=new Q,p=new Q;if(e)for(let g=0,v=e.count;g<v;g+=3){const b=e.getX(g+0),T=e.getX(g+1),x=e.getX(g+2);r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,T),l.fromBufferAttribute(t,x),m.subVectors(l,a),p.subVectors(r,a),m.cross(p),c.fromBufferAttribute(n,b),f.fromBufferAttribute(n,T),h.fromBufferAttribute(n,x),c.add(m),f.add(m),h.add(m),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(T,f.x,f.y,f.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let g=0,v=t.count;g<v;g+=3)r.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),l.fromBufferAttribute(t,g+2),m.subVectors(l,a),p.subVectors(r,a),m.cross(p),n.setXYZ(g+0,m.x,m.y,m.z),n.setXYZ(g+1,m.x,m.y,m.z),n.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(c,f){const h=c.array,m=c.itemSize,p=c.normalized,g=new h.constructor(f.length*m);let v=0,b=0;for(let T=0,x=f.length;T<x;T++){c.isInterleavedBufferAttribute?v=f[T]*c.data.stride+c.offset:v=f[T]*m;for(let _=0;_<m;_++)g[b++]=h[v++]}return new On(g,m,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ln,n=this.index.array,r=this.attributes;for(const c in r){const f=r[c],h=e(f,n);t.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const f=[],h=a[c];for(let m=0,p=h.length;m<p;m++){const g=h[m],v=e(g,n);f.push(v)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,f=l.length;c<f;c++){const h=l[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const h=n[f];e.data.attributes[f]=h.toJSON(e.data)}const r={};let a=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],m=[];for(let p=0,g=h.length;p<g;p++){const v=h[p];m.push(v.toJSON(e.data))}m.length>0&&(r[f]=m,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const h in r){const m=r[h];this.setAttribute(h,m.clone(t))}const a=e.morphAttributes;for(const h in a){const m=[],p=a[h];for(let g=0,v=p.length;g<v;g++)m.push(p[g].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,m=l.length;h<m;h++){const p=l[h];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nf=new jt,vr=new Fo,qa=new Ir,rf=new Q,Ya=new Q,Ka=new Q,Za=new Q,Yl=new Q,Ja=new Q,sf=new Q,Qa=new Q;class an extends un{constructor(e=new Ln,t=new pp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(a&&c){Ja.set(0,0,0);for(let f=0,h=a.length;f<h;f++){const m=c[f],p=a[f];m!==0&&(Yl.fromBufferAttribute(p,e),l?Ja.addScaledVector(Yl,m):Ja.addScaledVector(Yl.sub(t),m))}t.add(Ja)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(a),vr.copy(e.ray).recast(e.near),!(qa.containsPoint(vr.origin)===!1&&(vr.intersectSphere(qa,rf)===null||vr.origin.distanceToSquared(rf)>(e.far-e.near)**2))&&(nf.copy(a).invert(),vr.copy(e.ray).applyMatrix4(nf),!(n.boundingBox!==null&&vr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vr)))}_computeIntersections(e,t,n){let r;const a=this.geometry,l=this.material,c=a.index,f=a.attributes.position,h=a.attributes.uv,m=a.attributes.uv1,p=a.attributes.normal,g=a.groups,v=a.drawRange;if(c!==null)if(Array.isArray(l))for(let b=0,T=g.length;b<T;b++){const x=g[b],_=l[x.materialIndex],U=Math.max(x.start,v.start),I=Math.min(c.count,Math.min(x.start+x.count,v.start+v.count));for(let F=U,V=I;F<V;F+=3){const S=c.getX(F),G=c.getX(F+1),Y=c.getX(F+2);r=eo(this,_,e,n,h,m,p,S,G,Y),r&&(r.faceIndex=Math.floor(F/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const b=Math.max(0,v.start),T=Math.min(c.count,v.start+v.count);for(let x=b,_=T;x<_;x+=3){const U=c.getX(x),I=c.getX(x+1),F=c.getX(x+2);r=eo(this,l,e,n,h,m,p,U,I,F),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(f!==void 0)if(Array.isArray(l))for(let b=0,T=g.length;b<T;b++){const x=g[b],_=l[x.materialIndex],U=Math.max(x.start,v.start),I=Math.min(f.count,Math.min(x.start+x.count,v.start+v.count));for(let F=U,V=I;F<V;F+=3){const S=F,G=F+1,Y=F+2;r=eo(this,_,e,n,h,m,p,S,G,Y),r&&(r.faceIndex=Math.floor(F/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const b=Math.max(0,v.start),T=Math.min(f.count,v.start+v.count);for(let x=b,_=T;x<_;x+=3){const U=x,I=x+1,F=x+2;r=eo(this,l,e,n,h,m,p,U,I,F),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function Wy(i,e,t,n,r,a,l,c){let f;if(e.side===Cn?f=n.intersectTriangle(l,a,r,!0,c):f=n.intersectTriangle(r,a,l,e.side===Qi,c),f===null)return null;Qa.copy(c),Qa.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(Qa);return h<t.near||h>t.far?null:{distance:h,point:Qa.clone(),object:i}}function eo(i,e,t,n,r,a,l,c,f,h){i.getVertexPosition(c,Ya),i.getVertexPosition(f,Ka),i.getVertexPosition(h,Za);const m=Wy(i,e,t,n,Ya,Ka,Za,sf);if(m){const p=new Q;ui.getBarycoord(sf,Ya,Ka,Za,p),r&&(m.uv=ui.getInterpolatedAttribute(r,c,f,h,p,new ct)),a&&(m.uv1=ui.getInterpolatedAttribute(a,c,f,h,p,new ct)),l&&(m.normal=ui.getInterpolatedAttribute(l,c,f,h,p,new Q),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const g={a:c,b:f,c:h,normal:new Q,materialIndex:0};ui.getNormal(Ya,Ka,Za,g.normal),m.face=g,m.barycoord=p}return m}class Fr extends Ln{constructor(e=1,t=1,n=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:l};const c=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);const f=[],h=[],m=[],p=[];let g=0,v=0;b("z","y","x",-1,-1,n,t,e,l,a,0),b("z","y","x",1,-1,n,t,-e,l,a,1),b("x","z","y",1,1,e,n,t,r,l,2),b("x","z","y",1,-1,e,n,-t,r,l,3),b("x","y","z",1,-1,e,t,n,r,a,4),b("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(f),this.setAttribute("position",new sn(h,3)),this.setAttribute("normal",new sn(m,3)),this.setAttribute("uv",new sn(p,2));function b(T,x,_,U,I,F,V,S,G,Y,N){const A=F/G,O=V/Y,K=F/2,oe=V/2,Z=S/2,$=G+1,ee=Y+1;let pe=0,se=0;const Ee=new Q;for(let De=0;De<ee;De++){const je=De*O-oe;for(let at=0;at<$;at++){const Et=at*A-K;Ee[T]=Et*U,Ee[x]=je*I,Ee[_]=Z,h.push(Ee.x,Ee.y,Ee.z),Ee[T]=0,Ee[x]=0,Ee[_]=S>0?1:-1,m.push(Ee.x,Ee.y,Ee.z),p.push(at/G),p.push(1-De/Y),pe+=1}}for(let De=0;De<Y;De++)for(let je=0;je<G;je++){const at=g+je+$*De,Et=g+je+$*(De+1),lt=g+(je+1)+$*(De+1),Qe=g+(je+1)+$*De;f.push(at,Et,Qe),f.push(Et,lt,Qe),se+=6}c.addGroup(v,se,N),v+=se,g+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function An(i){const e={};for(let t=0;t<i.length;t++){const n=Ts(i[t]);for(const r in n)e[r]=n[r]}return e}function $y(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _p(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:kt.workingColorSpace}const jy={clone:Ts,merge:An};var Xy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nr extends fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xy,this.fragmentShader=qy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=$y(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class vp extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new Q,af=new ct,of=new ct;class Nn extends vp{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ru*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ru*2*Math.atan(Math.tan(yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,af,of),t.subVectors(of,af)}setViewOffset(e,t,n,r,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,h=l.fullHeight;a+=l.offsetX*r/f,t-=l.offsetY*n/h,r*=l.width/f,n*=l.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const as=-90,os=1;class Yy extends un{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nn(as,os,e,t);r.layers=this.layers,this.add(r);const a=new Nn(as,os,e,t);a.layers=this.layers,this.add(a);const l=new Nn(as,os,e,t);l.layers=this.layers,this.add(l);const c=new Nn(as,os,e,t);c.layers=this.layers,this.add(c);const f=new Nn(as,os,e,t);f.layers=this.layers,this.add(f);const h=new Nn(as,os,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,l,c,f]=t;for(const h of t)this.remove(h);if(e===bi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===To)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,c,f,h,m]=this.children,p=e.getRenderTarget(),g=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,l),e.setRenderTarget(n,2,r),e.render(t,c),e.setRenderTarget(n,3,r),e.render(t,f),e.setRenderTarget(n,4,r),e.render(t,h),n.texture.generateMipmaps=T,e.setRenderTarget(n,5,r),e.render(t,m),e.setRenderTarget(p,g,v),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class yp extends Dn{constructor(e=[],t=bs,n,r,a,l,c,f,h,m){super(e,t,n,r,a,l,c,f,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ky extends tr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new yp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fr(5,5,5),a=new nr({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Cn,blending:Fi});a.uniforms.tEquirect.value=t;const l=new an(r,a),c=t.minFilter;return t.minFilter===Ar&&(t.minFilter=wi),new Yy(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(a)}}class Rr extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zy={type:"move"};class Kl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,l=null;const c=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(const T of e.hand.values()){const x=t.getJointPose(T,n),_=this._getHandJoint(h,T);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const m=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],g=m.position.distanceTo(p.position),v=.02,b=.005;h.inputState.pinching&&g>v+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=v-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Zy)))}return c!==null&&(c.visible=r!==null),f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Rr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Nu{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ft(e),this.near=t,this.far=n}clone(){return new Nu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class xp extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Jy extends Dn{constructor(e=null,t=1,n=1,r,a,l,c,f,h=Pn,m=Pn,p,g){super(null,l,c,f,h,m,r,a,p,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lf extends On{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ls=new jt,cf=new jt,to=[],uf=new Lr,Qy=new jt,ta=new an,na=new Ir;class ex extends an{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new lf(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Qy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Lr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ls),uf.copy(e.boundingBox).applyMatrix4(ls),this.boundingBox.union(uf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ir),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ls),na.copy(e.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(na)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=n.length+1,l=e*a+1;for(let c=0;c<n.length;c++)n[c]=r[l+c]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(ta.geometry=this.geometry,ta.material=this.material,ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),na.copy(this.boundingSphere),na.applyMatrix4(n),e.ray.intersectsSphere(na)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,ls),cf.multiplyMatrices(n,ls),ta.matrixWorld=cf,ta.raycast(e,to);for(let l=0,c=to.length;l<c;l++){const f=to[l];f.instanceId=a,f.object=this,t.push(f)}to.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new lf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Jy(new Float32Array(r*this.count),r,this.count,Du,Ei));const a=this.morphTexture.source.data.data;let l=0;for(let h=0;h<n.length;h++)l+=n[h];const c=this.geometry.morphTargetsRelative?1:1-l,f=r*e;a[f]=c,a.set(n,f+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Zl=new Q,tx=new Q,nx=new yt;class Ki{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Zl.subVectors(n,t).cross(tx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Zl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nx.getNormalMatrix(e),r=this.coplanarPoint(Zl).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new Ir,ix=new ct(.5,.5),no=new Q;class Ou{constructor(e=new Ki,t=new Ki,n=new Ki,r=new Ki,a=new Ki,l=new Ki){this.planes=[e,t,n,r,a,l]}set(e,t,n,r,a,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(a),c[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bi,n=!1){const r=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],h=a[3],m=a[4],p=a[5],g=a[6],v=a[7],b=a[8],T=a[9],x=a[10],_=a[11],U=a[12],I=a[13],F=a[14],V=a[15];if(r[0].setComponents(h-l,v-m,_-b,V-U).normalize(),r[1].setComponents(h+l,v+m,_+b,V+U).normalize(),r[2].setComponents(h+c,v+p,_+T,V+I).normalize(),r[3].setComponents(h-c,v-p,_-T,V-I).normalize(),n)r[4].setComponents(f,g,x,F).normalize(),r[5].setComponents(h-f,v-g,_-x,V-F).normalize();else if(r[4].setComponents(h-f,v-g,_-x,V-F).normalize(),t===bi)r[5].setComponents(h+f,v+g,_+x,V+F).normalize();else if(t===To)r[5].setComponents(f,g,x,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){yr.center.set(0,0,0);const t=ix.distanceTo(e.center);return yr.radius=.7071067811865476+t,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(no.x=r.normal.x>0?e.max.x:e.min.x,no.y=r.normal.y>0?e.max.y:e.min.y,no.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(no)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xo extends fi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ro=new Q,Co=new Q,hf=new jt,ia=new Fo,io=new Ir,Jl=new Q,ff=new Q;class rx extends un{constructor(e=new Ln,t=new xo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)Ro.fromBufferAttribute(t,r-1),Co.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ro.distanceTo(Co);e.setAttribute("lineDistance",new sn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(r),io.radius+=a,e.ray.intersectsSphere(io)===!1)return;hf.copy(r).invert(),ia.copy(e.ray).applyMatrix4(hf);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,h=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){const v=Math.max(0,l.start),b=Math.min(m.count,l.start+l.count);for(let T=v,x=b-1;T<x;T+=h){const _=m.getX(T),U=m.getX(T+1),I=ro(this,e,ia,f,_,U,T);I&&t.push(I)}if(this.isLineLoop){const T=m.getX(b-1),x=m.getX(v),_=ro(this,e,ia,f,T,x,b-1);_&&t.push(_)}}else{const v=Math.max(0,l.start),b=Math.min(g.count,l.start+l.count);for(let T=v,x=b-1;T<x;T+=h){const _=ro(this,e,ia,f,T,T+1,T);_&&t.push(_)}if(this.isLineLoop){const T=ro(this,e,ia,f,b-1,v,b-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function ro(i,e,t,n,r,a,l){const c=i.geometry.attributes.position;if(Ro.fromBufferAttribute(c,r),Co.fromBufferAttribute(c,a),t.distanceSqToSegment(Ro,Co,Jl,ff)>n)return;Jl.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Jl);if(!(h<e.near||h>e.far))return{distance:h,point:ff.clone().applyMatrix4(i.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:i}}const df=new Q,pf=new Q;class mf extends rx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)df.fromBufferAttribute(t,r),pf.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+df.distanceTo(pf);e.setAttribute("lineDistance",new sn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class aa extends fi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gf=new jt,su=new Fo,so=new Ir,ao=new Q;class Ql extends un{constructor(e=new Ln,t=new aa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(r),so.radius+=a,e.ray.intersectsSphere(so)===!1)return;gf.copy(r).invert(),su.copy(e.ray).applyMatrix4(gf);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,h=n.index,p=n.attributes.position;if(h!==null){const g=Math.max(0,l.start),v=Math.min(h.count,l.start+l.count);for(let b=g,T=v;b<T;b++){const x=h.getX(b);ao.fromBufferAttribute(p,x),_f(ao,x,f,r,e,t,this)}}else{const g=Math.max(0,l.start),v=Math.min(p.count,l.start+l.count);for(let b=g,T=v;b<T;b++)ao.fromBufferAttribute(p,b),_f(ao,b,f,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function _f(i,e,t,n,r,a,l){const c=su.distanceSqToPoint(i);if(c<t){const f=new Q;su.closestPointToPoint(i,f),f.applyMatrix4(n);const h=r.ray.origin.distanceTo(f);if(h<r.near||h>r.far)return;a.push({distance:h,distanceToRay:Math.sqrt(c),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:l})}}class wp extends Dn{constructor(e,t,n=Cr,r,a,l,c=Pn,f=Pn,h,m=ua,p=1){if(m!==ua&&m!==ha)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:p};super(g,r,a,l,c,f,m,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Uu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ep extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ku extends Ln{constructor(e=1,t=1,n=1,r=32,a=1,l=!1,c=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:a,openEnded:l,thetaStart:c,thetaLength:f};const h=this;r=Math.floor(r),a=Math.floor(a);const m=[],p=[],g=[],v=[];let b=0;const T=[],x=n/2;let _=0;U(),l===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(m),this.setAttribute("position",new sn(p,3)),this.setAttribute("normal",new sn(g,3)),this.setAttribute("uv",new sn(v,2));function U(){const F=new Q,V=new Q;let S=0;const G=(t-e)/n;for(let Y=0;Y<=a;Y++){const N=[],A=Y/a,O=A*(t-e)+e;for(let K=0;K<=r;K++){const oe=K/r,Z=oe*f+c,$=Math.sin(Z),ee=Math.cos(Z);V.x=O*$,V.y=-A*n+x,V.z=O*ee,p.push(V.x,V.y,V.z),F.set($,G,ee).normalize(),g.push(F.x,F.y,F.z),v.push(oe,1-A),N.push(b++)}T.push(N)}for(let Y=0;Y<r;Y++)for(let N=0;N<a;N++){const A=T[N][Y],O=T[N+1][Y],K=T[N+1][Y+1],oe=T[N][Y+1];(e>0||N!==0)&&(m.push(A,O,oe),S+=3),(t>0||N!==a-1)&&(m.push(O,K,oe),S+=3)}h.addGroup(_,S,0),_+=S}function I(F){const V=b,S=new ct,G=new Q;let Y=0;const N=F===!0?e:t,A=F===!0?1:-1;for(let K=1;K<=r;K++)p.push(0,x*A,0),g.push(0,A,0),v.push(.5,.5),b++;const O=b;for(let K=0;K<=r;K++){const Z=K/r*f+c,$=Math.cos(Z),ee=Math.sin(Z);G.x=N*ee,G.y=x*A,G.z=N*$,p.push(G.x,G.y,G.z),g.push(0,A,0),S.x=$*.5+.5,S.y=ee*.5*A+.5,v.push(S.x,S.y),b++}for(let K=0;K<r;K++){const oe=V+K,Z=O+K;F===!0?m.push(Z,Z+1,oe):m.push(Z+1,Z,oe),Y+=3}h.addGroup(_,Y,F===!0?1:2),_+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ku(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ma extends Ln{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,l=t/2,c=Math.floor(n),f=Math.floor(r),h=c+1,m=f+1,p=e/c,g=t/f,v=[],b=[],T=[],x=[];for(let _=0;_<m;_++){const U=_*g-l;for(let I=0;I<h;I++){const F=I*p-a;b.push(F,-U,0),T.push(0,0,1),x.push(I/c),x.push(1-_/f)}}for(let _=0;_<f;_++)for(let U=0;U<c;U++){const I=U+h*_,F=U+h*(_+1),V=U+1+h*(_+1),S=U+1+h*_;v.push(I,F,S),v.push(F,V,S)}this.setIndex(v),this.setAttribute("position",new sn(b,3)),this.setAttribute("normal",new sn(T,3)),this.setAttribute("uv",new sn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bu extends Ln{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:l,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const f=Math.min(l+c,Math.PI);let h=0;const m=[],p=new Q,g=new Q,v=[],b=[],T=[],x=[];for(let _=0;_<=n;_++){const U=[],I=_/n;let F=0;_===0&&l===0?F=.5/t:_===n&&f===Math.PI&&(F=-.5/t);for(let V=0;V<=t;V++){const S=V/t;p.x=-e*Math.cos(r+S*a)*Math.sin(l+I*c),p.y=e*Math.cos(l+I*c),p.z=e*Math.sin(r+S*a)*Math.sin(l+I*c),b.push(p.x,p.y,p.z),g.copy(p).normalize(),T.push(g.x,g.y,g.z),x.push(S+F,1-I),U.push(h++)}m.push(U)}for(let _=0;_<n;_++)for(let U=0;U<t;U++){const I=m[_][U+1],F=m[_][U],V=m[_+1][U],S=m[_+1][U+1];(_!==0||l>0)&&v.push(I,F,S),(_!==n-1||f<Math.PI)&&v.push(F,V,S)}this.setIndex(v),this.setAttribute("position",new sn(b,3)),this.setAttribute("normal",new sn(T,3)),this.setAttribute("uv",new sn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class au extends fi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sx extends fi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ft(16777215),this.specular=new ft(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Do,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ax extends fi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Do,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bp extends fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=my,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ox extends fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vf={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class lx{constructor(e,t,n){const r=this;let a=!1,l=0,c=0,f;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(m){c++,a===!1&&r.onStart!==void 0&&r.onStart(m,l,c),a=!0},this.itemEnd=function(m){l++,r.onProgress!==void 0&&r.onProgress(m,l,c),l===c&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(m){r.onError!==void 0&&r.onError(m)},this.resolveURL=function(m){return f?f(m):m},this.setURLModifier=function(m){return f=m,this},this.addHandler=function(m,p){return h.push(m,p),this},this.removeHandler=function(m){const p=h.indexOf(m);return p!==-1&&h.splice(p,2),this},this.getHandler=function(m){for(let p=0,g=h.length;p<g;p+=2){const v=h[p],b=h[p+1];if(v.global&&(v.lastIndex=0),v.test(m))return b}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const cx=new lx;class Uo{constructor(e){this.manager=e!==void 0?e:cx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Uo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pi={};class ux extends Error{constructor(e,t){super(e),this.response=t}}class Sp extends Uo{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=vf.get(`file:${e}`);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Pi[e]!==void 0){Pi[e].push({onLoad:t,onProgress:n,onError:r});return}Pi[e]=[],Pi[e].push({onLoad:t,onProgress:n,onError:r});const l=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),c=this.mimeType,f=this.responseType;fetch(l).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const m=Pi[e],p=h.body.getReader(),g=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),v=g?parseInt(g):0,b=v!==0;let T=0;const x=new ReadableStream({start(_){U();function U(){p.read().then(({done:I,value:F})=>{if(I)_.close();else{T+=F.byteLength;const V=new ProgressEvent("progress",{lengthComputable:b,loaded:T,total:v});for(let S=0,G=m.length;S<G;S++){const Y=m[S];Y.onProgress&&Y.onProgress(V)}_.enqueue(F),U()}},I=>{_.error(I)})}}});return new Response(x)}else throw new ux(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(f){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(m=>new DOMParser().parseFromString(m,c));case"json":return h.json();default:if(c==="")return h.text();{const p=/charset="?([^;"\s]*)"?/i.exec(c),g=p&&p[1]?p[1].toLowerCase():void 0,v=new TextDecoder(g);return h.arrayBuffer().then(b=>v.decode(b))}}}).then(h=>{vf.add(`file:${e}`,h);const m=Pi[e];delete Pi[e];for(let p=0,g=m.length;p<g;p++){const v=m[p];v.onLoad&&v.onLoad(h)}}).catch(h=>{const m=Pi[e];if(m===void 0)throw this.manager.itemError(e),h;delete Pi[e];for(let p=0,g=m.length;p<g;p++){const v=m[p];v.onError&&v.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class zu extends un{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class hx extends zu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ft(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ec=new jt,yf=new Q,xf=new Q;class Mp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ou,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;yf.setFromMatrixPosition(e.matrixWorld),t.position.copy(yf),xf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xf),t.updateMatrixWorld(),ec.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ec,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ec)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wf=new jt,ra=new Q,tc=new Q;class fx extends Mp{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new $t(2,1,1,1),new $t(0,1,1,1),new $t(3,1,1,1),new $t(1,1,1,1),new $t(3,0,1,1),new $t(1,0,1,1)],this._cubeDirections=[new Q(1,0,0),new Q(-1,0,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,1,0),new Q(0,-1,0)],this._cubeUps=[new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,1,0),new Q(0,0,1),new Q(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),ra.setFromMatrixPosition(e.matrixWorld),n.position.copy(ra),tc.copy(n.position),tc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(tc),n.updateMatrixWorld(),r.makeTranslation(-ra.x,-ra.y,-ra.z),wf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wf,n.coordinateSystem,n.reversedDepth)}}class dx extends zu{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new fx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Tp extends vp{constructor(e=-1,t=1,n=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,l=n+e,c=r+t,f=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,l=a+h*this.view.width,c-=m*this.view.offsetY,f=c-m*this.view.height}this.projectionMatrix.makeOrthographic(a,l,c,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class px extends Mp{constructor(){super(new Tp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ef extends zu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new px}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mx extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class bf{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Pt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class gx extends Dr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Sf(i,e,t,n){const r=_x(n);switch(t){case sp:return i*e;case Du:return i*e/r.components*r.byteLength;case Lu:return i*e/r.components*r.byteLength;case op:return i*e*2/r.components*r.byteLength;case Iu:return i*e*2/r.components*r.byteLength;case ap:return i*e*3/r.components*r.byteLength;case ei:return i*e*4/r.components*r.byteLength;case Fu:return i*e*4/r.components*r.byteLength;case mo:case go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _o:case vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dc:case Ic:return Math.max(i,16)*Math.max(e,8)/4;case Pc:case Lc:return Math.max(i,8)*Math.max(e,8)/2;case Fc:case Uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case zc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case $c:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case jc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case qc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Yc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Kc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Zc:case Jc:case Qc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case eu:case tu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case nu:case iu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _x(i){switch(i){case hi:case tp:return{byteLength:1,components:1};case la:case np:case da:return{byteLength:2,components:1};case Cu:case Pu:return{byteLength:2,components:4};case Cr:case Ru:case Ei:return{byteLength:4,components:1};case ip:case rp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Au}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Au);function Ap(){let i=null,e=!1,t=null,n=null;function r(a,l){t(a,l),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function vx(i){const e=new WeakMap;function t(c,f){const h=c.array,m=c.usage,p=h.byteLength,g=i.createBuffer();i.bindBuffer(f,g),i.bufferData(f,h,m),c.onUploadCallback();let v;if(h instanceof Float32Array)v=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)v=i.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=i.SHORT;else if(h instanceof Uint32Array)v=i.UNSIGNED_INT;else if(h instanceof Int32Array)v=i.INT;else if(h instanceof Int8Array)v=i.BYTE;else if(h instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function n(c,f,h){const m=f.array,p=f.updateRanges;if(i.bindBuffer(h,c),p.length===0)i.bufferSubData(h,0,m);else{p.sort((v,b)=>v.start-b.start);let g=0;for(let v=1;v<p.length;v++){const b=p[g],T=p[v];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++g,p[g]=T)}p.length=g+1;for(let v=0,b=p.length;v<b;v++){const T=p[v];i.bufferSubData(h,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=e.get(c);f&&(i.deleteBuffer(f.buffer),e.delete(c))}function l(c,f){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const m=e.get(c);(!m||m.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,f));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,f),h.version=c.version}}return{get:r,remove:a,update:l}}var yx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ex=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ax=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Rx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Px=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ix=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ox=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Vx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$x=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ew=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ow=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_w=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ww=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ew=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Aw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Iw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Uw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ow=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ww=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$w=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,tE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,aE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_E=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ME=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,TE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,RE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,IE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,OE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,BE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,GE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$E=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,XE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,KE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wt={alphahash_fragment:yx,alphahash_pars_fragment:xx,alphamap_fragment:wx,alphamap_pars_fragment:Ex,alphatest_fragment:bx,alphatest_pars_fragment:Sx,aomap_fragment:Mx,aomap_pars_fragment:Tx,batching_pars_vertex:Ax,batching_vertex:Rx,begin_vertex:Cx,beginnormal_vertex:Px,bsdfs:Dx,iridescence_fragment:Lx,bumpmap_pars_fragment:Ix,clipping_planes_fragment:Fx,clipping_planes_pars_fragment:Ux,clipping_planes_pars_vertex:Nx,clipping_planes_vertex:Ox,color_fragment:kx,color_pars_fragment:Bx,color_pars_vertex:zx,color_vertex:Hx,common:Vx,cube_uv_reflection_fragment:Gx,defaultnormal_vertex:Wx,displacementmap_pars_vertex:$x,displacementmap_vertex:jx,emissivemap_fragment:Xx,emissivemap_pars_fragment:qx,colorspace_fragment:Yx,colorspace_pars_fragment:Kx,envmap_fragment:Zx,envmap_common_pars_fragment:Jx,envmap_pars_fragment:Qx,envmap_pars_vertex:ew,envmap_physical_pars_fragment:hw,envmap_vertex:tw,fog_vertex:nw,fog_pars_vertex:iw,fog_fragment:rw,fog_pars_fragment:sw,gradientmap_pars_fragment:aw,lightmap_pars_fragment:ow,lights_lambert_fragment:lw,lights_lambert_pars_fragment:cw,lights_pars_begin:uw,lights_toon_fragment:fw,lights_toon_pars_fragment:dw,lights_phong_fragment:pw,lights_phong_pars_fragment:mw,lights_physical_fragment:gw,lights_physical_pars_fragment:_w,lights_fragment_begin:vw,lights_fragment_maps:yw,lights_fragment_end:xw,logdepthbuf_fragment:ww,logdepthbuf_pars_fragment:Ew,logdepthbuf_pars_vertex:bw,logdepthbuf_vertex:Sw,map_fragment:Mw,map_pars_fragment:Tw,map_particle_fragment:Aw,map_particle_pars_fragment:Rw,metalnessmap_fragment:Cw,metalnessmap_pars_fragment:Pw,morphinstance_vertex:Dw,morphcolor_vertex:Lw,morphnormal_vertex:Iw,morphtarget_pars_vertex:Fw,morphtarget_vertex:Uw,normal_fragment_begin:Nw,normal_fragment_maps:Ow,normal_pars_fragment:kw,normal_pars_vertex:Bw,normal_vertex:zw,normalmap_pars_fragment:Hw,clearcoat_normal_fragment_begin:Vw,clearcoat_normal_fragment_maps:Gw,clearcoat_pars_fragment:Ww,iridescence_pars_fragment:$w,opaque_fragment:jw,packing:Xw,premultiplied_alpha_fragment:qw,project_vertex:Yw,dithering_fragment:Kw,dithering_pars_fragment:Zw,roughnessmap_fragment:Jw,roughnessmap_pars_fragment:Qw,shadowmap_pars_fragment:eE,shadowmap_pars_vertex:tE,shadowmap_vertex:nE,shadowmask_pars_fragment:iE,skinbase_vertex:rE,skinning_pars_vertex:sE,skinning_vertex:aE,skinnormal_vertex:oE,specularmap_fragment:lE,specularmap_pars_fragment:cE,tonemapping_fragment:uE,tonemapping_pars_fragment:hE,transmission_fragment:fE,transmission_pars_fragment:dE,uv_pars_fragment:pE,uv_pars_vertex:mE,uv_vertex:gE,worldpos_vertex:_E,background_vert:vE,background_frag:yE,backgroundCube_vert:xE,backgroundCube_frag:wE,cube_vert:EE,cube_frag:bE,depth_vert:SE,depth_frag:ME,distanceRGBA_vert:TE,distanceRGBA_frag:AE,equirect_vert:RE,equirect_frag:CE,linedashed_vert:PE,linedashed_frag:DE,meshbasic_vert:LE,meshbasic_frag:IE,meshlambert_vert:FE,meshlambert_frag:UE,meshmatcap_vert:NE,meshmatcap_frag:OE,meshnormal_vert:kE,meshnormal_frag:BE,meshphong_vert:zE,meshphong_frag:HE,meshphysical_vert:VE,meshphysical_frag:GE,meshtoon_vert:WE,meshtoon_frag:$E,points_vert:jE,points_frag:XE,shadow_vert:qE,shadow_frag:YE,sprite_vert:KE,sprite_frag:ZE},ke={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},xi={basic:{uniforms:An([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:An([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new ft(0)}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:An([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:An([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:An([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new ft(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:An([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:An([ke.points,ke.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:An([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:An([ke.common,ke.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:An([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:An([ke.sprite,ke.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distanceRGBA:{uniforms:An([ke.common,ke.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distanceRGBA_vert,fragmentShader:wt.distanceRGBA_frag},shadow:{uniforms:An([ke.lights,ke.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};xi.physical={uniforms:An([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const oo={r:0,b:0,g:0},xr=new ti,JE=new jt;function QE(i,e,t,n,r,a,l){const c=new ft(0);let f=a===!0?0:1,h,m,p=null,g=0,v=null;function b(I){let F=I.isScene===!0?I.background:null;return F&&F.isTexture&&(F=(I.backgroundBlurriness>0?t:e).get(F)),F}function T(I){let F=!1;const V=b(I);V===null?_(c,f):V&&V.isColor&&(_(V,1),F=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,l):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(i.autoClear||F)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(I,F){const V=b(F);V&&(V.isCubeTexture||V.mapping===Lo)?(m===void 0&&(m=new an(new Fr(1,1,1),new nr({name:"BackgroundCubeMaterial",uniforms:Ts(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(S,G,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),xr.copy(F.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),m.material.uniforms.envMap.value=V,m.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(JE.makeRotationFromEuler(xr)),m.material.toneMapped=kt.getTransfer(V.colorSpace)!==Gt,(p!==V||g!==V.version||v!==i.toneMapping)&&(m.material.needsUpdate=!0,p=V,g=V.version,v=i.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null)):V&&V.isTexture&&(h===void 0&&(h=new an(new ma(2,2),new nr({name:"BackgroundMaterial",uniforms:Ts(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=V,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.toneMapped=kt.getTransfer(V.colorSpace)!==Gt,V.matrixAutoUpdate===!0&&V.updateMatrix(),h.material.uniforms.uvTransform.value.copy(V.matrix),(p!==V||g!==V.version||v!==i.toneMapping)&&(h.material.needsUpdate=!0,p=V,g=V.version,v=i.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null))}function _(I,F){I.getRGB(oo,_p(i)),n.buffers.color.setClear(oo.r,oo.g,oo.b,F,l)}function U(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(I,F=1){c.set(I),f=F,_(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(I){f=I,_(c,f)},render:T,addToRenderList:x,dispose:U}}function eb(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=g(null);let a=r,l=!1;function c(A,O,K,oe,Z){let $=!1;const ee=p(oe,K,O);a!==ee&&(a=ee,h(a.object)),$=v(A,oe,K,Z),$&&b(A,oe,K,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),($||l)&&(l=!1,F(A,O,K,oe),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function f(){return i.createVertexArray()}function h(A){return i.bindVertexArray(A)}function m(A){return i.deleteVertexArray(A)}function p(A,O,K){const oe=K.wireframe===!0;let Z=n[A.id];Z===void 0&&(Z={},n[A.id]=Z);let $=Z[O.id];$===void 0&&($={},Z[O.id]=$);let ee=$[oe];return ee===void 0&&(ee=g(f()),$[oe]=ee),ee}function g(A){const O=[],K=[],oe=[];for(let Z=0;Z<t;Z++)O[Z]=0,K[Z]=0,oe[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:K,attributeDivisors:oe,object:A,attributes:{},index:null}}function v(A,O,K,oe){const Z=a.attributes,$=O.attributes;let ee=0;const pe=K.getAttributes();for(const se in pe)if(pe[se].location>=0){const De=Z[se];let je=$[se];if(je===void 0&&(se==="instanceMatrix"&&A.instanceMatrix&&(je=A.instanceMatrix),se==="instanceColor"&&A.instanceColor&&(je=A.instanceColor)),De===void 0||De.attribute!==je||je&&De.data!==je.data)return!0;ee++}return a.attributesNum!==ee||a.index!==oe}function b(A,O,K,oe){const Z={},$=O.attributes;let ee=0;const pe=K.getAttributes();for(const se in pe)if(pe[se].location>=0){let De=$[se];De===void 0&&(se==="instanceMatrix"&&A.instanceMatrix&&(De=A.instanceMatrix),se==="instanceColor"&&A.instanceColor&&(De=A.instanceColor));const je={};je.attribute=De,De&&De.data&&(je.data=De.data),Z[se]=je,ee++}a.attributes=Z,a.attributesNum=ee,a.index=oe}function T(){const A=a.newAttributes;for(let O=0,K=A.length;O<K;O++)A[O]=0}function x(A){_(A,0)}function _(A,O){const K=a.newAttributes,oe=a.enabledAttributes,Z=a.attributeDivisors;K[A]=1,oe[A]===0&&(i.enableVertexAttribArray(A),oe[A]=1),Z[A]!==O&&(i.vertexAttribDivisor(A,O),Z[A]=O)}function U(){const A=a.newAttributes,O=a.enabledAttributes;for(let K=0,oe=O.length;K<oe;K++)O[K]!==A[K]&&(i.disableVertexAttribArray(K),O[K]=0)}function I(A,O,K,oe,Z,$,ee){ee===!0?i.vertexAttribIPointer(A,O,K,Z,$):i.vertexAttribPointer(A,O,K,oe,Z,$)}function F(A,O,K,oe){T();const Z=oe.attributes,$=K.getAttributes(),ee=O.defaultAttributeValues;for(const pe in $){const se=$[pe];if(se.location>=0){let Ee=Z[pe];if(Ee===void 0&&(pe==="instanceMatrix"&&A.instanceMatrix&&(Ee=A.instanceMatrix),pe==="instanceColor"&&A.instanceColor&&(Ee=A.instanceColor)),Ee!==void 0){const De=Ee.normalized,je=Ee.itemSize,at=e.get(Ee);if(at===void 0)continue;const Et=at.buffer,lt=at.type,Qe=at.bytesPerElement,de=lt===i.INT||lt===i.UNSIGNED_INT||Ee.gpuType===Ru;if(Ee.isInterleavedBufferAttribute){const ye=Ee.data,ue=ye.stride,_e=Ee.offset;if(ye.isInstancedInterleavedBuffer){for(let Ae=0;Ae<se.locationSize;Ae++)_(se.location+Ae,ye.meshPerAttribute);A.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ae=0;Ae<se.locationSize;Ae++)x(se.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let Ae=0;Ae<se.locationSize;Ae++)I(se.location+Ae,je/se.locationSize,lt,De,ue*Qe,(_e+je/se.locationSize*Ae)*Qe,de)}else{if(Ee.isInstancedBufferAttribute){for(let ye=0;ye<se.locationSize;ye++)_(se.location+ye,Ee.meshPerAttribute);A.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let ye=0;ye<se.locationSize;ye++)x(se.location+ye);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let ye=0;ye<se.locationSize;ye++)I(se.location+ye,je/se.locationSize,lt,De,je*Qe,je/se.locationSize*ye*Qe,de)}}else if(ee!==void 0){const De=ee[pe];if(De!==void 0)switch(De.length){case 2:i.vertexAttrib2fv(se.location,De);break;case 3:i.vertexAttrib3fv(se.location,De);break;case 4:i.vertexAttrib4fv(se.location,De);break;default:i.vertexAttrib1fv(se.location,De)}}}}U()}function V(){Y();for(const A in n){const O=n[A];for(const K in O){const oe=O[K];for(const Z in oe)m(oe[Z].object),delete oe[Z];delete O[K]}delete n[A]}}function S(A){if(n[A.id]===void 0)return;const O=n[A.id];for(const K in O){const oe=O[K];for(const Z in oe)m(oe[Z].object),delete oe[Z];delete O[K]}delete n[A.id]}function G(A){for(const O in n){const K=n[O];if(K[A.id]===void 0)continue;const oe=K[A.id];for(const Z in oe)m(oe[Z].object),delete oe[Z];delete K[A.id]}}function Y(){N(),l=!0,a!==r&&(a=r,h(a.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:Y,resetDefaultState:N,dispose:V,releaseStatesOfGeometry:S,releaseStatesOfProgram:G,initAttributes:T,enableAttribute:x,disableUnusedAttributes:U}}function tb(i,e,t){let n;function r(h){n=h}function a(h,m){i.drawArrays(n,h,m),t.update(m,n,1)}function l(h,m,p){p!==0&&(i.drawArraysInstanced(n,h,m,p),t.update(m,n,p))}function c(h,m,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,m,0,p);let v=0;for(let b=0;b<p;b++)v+=m[b];t.update(v,n,1)}function f(h,m,p,g){if(p===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let b=0;b<h.length;b++)l(h[b],m[b],g[b]);else{v.multiDrawArraysInstancedWEBGL(n,h,0,m,0,g,0,p);let b=0;for(let T=0;T<p;T++)b+=m[T]*g[T];t.update(b,n,1)}}this.setMode=r,this.render=a,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function nb(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(G){return!(G!==ei&&n.convert(G)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(G){const Y=G===da&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(G!==hi&&n.convert(G)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&G!==Ei&&!Y)}function f(G){if(G==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=f(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const p=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),U=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),F=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),V=b>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:l,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:p,reversedDepthBuffer:g,maxTextures:v,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:U,maxVaryings:I,maxFragmentUniforms:F,vertexTextures:V,maxSamples:S}}function ib(i){const e=this;let t=null,n=0,r=!1,a=!1;const l=new Ki,c=new yt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(p,g){const v=p.length!==0||g||n!==0||r;return r=g,n=p.length,v},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,g){t=m(p,g,0)},this.setState=function(p,g,v){const b=p.clippingPlanes,T=p.clipIntersection,x=p.clipShadows,_=i.get(p);if(!r||b===null||b.length===0||a&&!x)a?m(null):h();else{const U=a?0:n,I=U*4;let F=_.clippingState||null;f.value=F,F=m(b,g,I,v);for(let V=0;V!==I;++V)F[V]=t[V];_.clippingState=F,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(p,g,v,b){const T=p!==null?p.length:0;let x=null;if(T!==0){if(x=f.value,b!==!0||x===null){const _=v+T*4,U=g.matrixWorldInverse;c.getNormalMatrix(U),(x===null||x.length<_)&&(x=new Float32Array(_));for(let I=0,F=v;I!==T;++I,F+=4)l.copy(p[I]).applyMatrix4(U,c),l.normal.toArray(x,F),x[F+3]=l.constant}f.value=x,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,x}}function rb(i){let e=new WeakMap;function t(l,c){return c===Tc?l.mapping=bs:c===Ac&&(l.mapping=Ss),l}function n(l){if(l&&l.isTexture){const c=l.mapping;if(c===Tc||c===Ac)if(e.has(l)){const f=e.get(l).texture;return t(f,l.mapping)}else{const f=l.image;if(f&&f.height>0){const h=new Ky(f.height);return h.fromEquirectangularTexture(i,l),e.set(l,h),l.addEventListener("dispose",r),t(h.texture,l.mapping)}else return null}}return l}function r(l){const c=l.target;c.removeEventListener("dispose",r);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const ps=4,Mf=[.125,.215,.35,.446,.526,.582],Mr=20,nc=new Tp,Tf=new ft;let ic=null,rc=0,sc=0,ac=!1;const Er=(1+Math.sqrt(5))/2,cs=1/Er,Af=[new Q(-Er,cs,0),new Q(Er,cs,0),new Q(-cs,0,Er),new Q(cs,0,Er),new Q(0,Er,-cs),new Q(0,Er,cs),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)],sb=new Q;class ou{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,a={}){const{size:l=256,position:c=sb}=a;ic=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,n,r,f,c),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ic,rc,sc),this._renderer.xr.enabled=ac,e.scissorTest=!1,lo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ic=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:da,format:ei,colorSpace:Ms,depthBuffer:!1},r=Rf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rf(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ab(a)),this._blurMaterial=ob(a,e,t)}return r}_compileMaterial(e){const t=new an(this._lodPlanes[0],e);this._renderer.compile(t,nc)}_sceneToCubeUV(e,t,n,r,a){const f=new Nn(90,1,t,n),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,v=p.toneMapping;p.getClearColor(Tf),p.toneMapping=Ji,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null));const T=new pp({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),x=new an(new Fr,T);let _=!1;const U=e.background;U?U.isColor&&(T.color.copy(U),e.background=null,_=!0):(T.color.copy(Tf),_=!0);for(let I=0;I<6;I++){const F=I%3;F===0?(f.up.set(0,h[I],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x+m[I],a.y,a.z)):F===1?(f.up.set(0,0,h[I]),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y+m[I],a.z)):(f.up.set(0,h[I],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y,a.z+m[I]));const V=this._cubeSize;lo(r,F*V,I>2?V:0,V,V),p.setRenderTarget(r),_&&p.render(x,f),p.render(e,f)}x.geometry.dispose(),x.material.dispose(),p.toneMapping=v,p.autoClear=g,e.background=U}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===bs||e.mapping===Ss;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cf());const a=r?this._cubemapMaterial:this._equirectMaterial,l=new an(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const f=this._cubeSize;lo(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(l,nc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=Af[(r-a-1)%Af.length];this._blur(e,a-1,a,l,c)}t.autoClear=n}_blur(e,t,n,r,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",a),this._halfBlur(l,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,l,c){const f=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,p=new an(this._lodPlanes[r],h),g=h.uniforms,v=this._sizeLods[n]-1,b=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*Mr-1),T=a/b,x=isFinite(a)?1+Math.floor(m*T):Mr;x>Mr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Mr}`);const _=[];let U=0;for(let G=0;G<Mr;++G){const Y=G/T,N=Math.exp(-Y*Y/2);_.push(N),G===0?U+=N:G<x&&(U+=2*N)}for(let G=0;G<_.length;G++)_[G]=_[G]/U;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=_,g.latitudinal.value=l==="latitudinal",c&&(g.poleAxis.value=c);const{_lodMax:I}=this;g.dTheta.value=b,g.mipInt.value=I-n;const F=this._sizeLods[r],V=3*F*(r>I-ps?r-I+ps:0),S=4*(this._cubeSize-F);lo(t,V,S,3*F,2*F),f.setRenderTarget(t),f.render(p,nc)}}function ab(i){const e=[],t=[],n=[];let r=i;const a=i-ps+1+Mf.length;for(let l=0;l<a;l++){const c=Math.pow(2,r);t.push(c);let f=1/c;l>i-ps?f=Mf[l-i+ps-1]:l===0&&(f=0),n.push(f);const h=1/(c-2),m=-h,p=1+h,g=[m,m,p,m,p,p,m,m,p,p,m,p],v=6,b=6,T=3,x=2,_=1,U=new Float32Array(T*b*v),I=new Float32Array(x*b*v),F=new Float32Array(_*b*v);for(let S=0;S<v;S++){const G=S%3*2/3-1,Y=S>2?0:-1,N=[G,Y,0,G+2/3,Y,0,G+2/3,Y+1,0,G,Y,0,G+2/3,Y+1,0,G,Y+1,0];U.set(N,T*b*S),I.set(g,x*b*S);const A=[S,S,S,S,S,S];F.set(A,_*b*S)}const V=new Ln;V.setAttribute("position",new On(U,T)),V.setAttribute("uv",new On(I,x)),V.setAttribute("faceIndex",new On(F,_)),e.push(V),r>ps&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Rf(i,e,t){const n=new tr(i,e,t);return n.texture.mapping=Lo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function ob(i,e,t){const n=new Float32Array(Mr),r=new Q(0,1,0);return new nr({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Cf(){return new nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Pf(){return new nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Hu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lb(i){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const f=c.mapping,h=f===Tc||f===Ac,m=f===bs||f===Ss;if(h||m){let p=e.get(c);const g=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==g)return t===null&&(t=new ou(i)),p=h?t.fromEquirectangular(c,p):t.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),p.texture;if(p!==void 0)return p.texture;{const v=c.image;return h&&v&&v.height>0||m&&v&&r(v)?(t===null&&(t=new ou(i)),p=h?t.fromEquirectangular(c):t.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),c.addEventListener("dispose",a),p.texture):null}}}return c}function r(c){let f=0;const h=6;for(let m=0;m<h;m++)c[m]!==void 0&&f++;return f===h}function a(c){const f=c.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function cb(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&fa("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function ub(i,e,t,n){const r={},a=new WeakMap;function l(p){const g=p.target;g.index!==null&&e.remove(g.index);for(const b in g.attributes)e.remove(g.attributes[b]);g.removeEventListener("dispose",l),delete r[g.id];const v=a.get(g);v&&(e.remove(v),a.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(p,g){return r[g.id]===!0||(g.addEventListener("dispose",l),r[g.id]=!0,t.memory.geometries++),g}function f(p){const g=p.attributes;for(const v in g)e.update(g[v],i.ARRAY_BUFFER)}function h(p){const g=[],v=p.index,b=p.attributes.position;let T=0;if(v!==null){const U=v.array;T=v.version;for(let I=0,F=U.length;I<F;I+=3){const V=U[I+0],S=U[I+1],G=U[I+2];g.push(V,S,S,G,G,V)}}else if(b!==void 0){const U=b.array;T=b.version;for(let I=0,F=U.length/3-1;I<F;I+=3){const V=I+0,S=I+1,G=I+2;g.push(V,S,S,G,G,V)}}else return;const x=new(up(g)?gp:mp)(g,1);x.version=T;const _=a.get(p);_&&e.remove(_),a.set(p,x)}function m(p){const g=a.get(p);if(g){const v=p.index;v!==null&&g.version<v.version&&h(p)}else h(p);return a.get(p)}return{get:c,update:f,getWireframeAttribute:m}}function hb(i,e,t){let n;function r(g){n=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function f(g,v){i.drawElements(n,v,a,g*l),t.update(v,n,1)}function h(g,v,b){b!==0&&(i.drawElementsInstanced(n,v,a,g*l,b),t.update(v,n,b))}function m(g,v,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,a,g,0,b);let x=0;for(let _=0;_<b;_++)x+=v[_];t.update(x,n,1)}function p(g,v,b,T){if(b===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<g.length;_++)h(g[_]/l,v[_],T[_]);else{x.multiDrawElementsInstancedWEBGL(n,v,0,a,g,0,T,0,b);let _=0;for(let U=0;U<b;U++)_+=v[U]*T[U];t.update(_,n,1)}}this.setMode=r,this.setIndex=c,this.render=f,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=p}function fb(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,c){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=c*(a/3);break;case i.LINES:t.lines+=c*(a/2);break;case i.LINE_STRIP:t.lines+=c*(a-1);break;case i.LINE_LOOP:t.lines+=c*a;break;case i.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function db(i,e,t){const n=new WeakMap,r=new $t;function a(l,c,f){const h=l.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=m!==void 0?m.length:0;let g=n.get(c);if(g===void 0||g.count!==p){let N=function(){G.dispose(),n.delete(c),c.removeEventListener("dispose",N)};g!==void 0&&g.texture.dispose();const v=c.morphAttributes.position!==void 0,b=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],_=c.morphAttributes.normal||[],U=c.morphAttributes.color||[];let I=0;v===!0&&(I=1),b===!0&&(I=2),T===!0&&(I=3);let F=c.attributes.position.count*I,V=1;F>e.maxTextureSize&&(V=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const S=new Float32Array(F*V*4*p),G=new hp(S,F,V,p);G.type=Ei,G.needsUpdate=!0;const Y=I*4;for(let A=0;A<p;A++){const O=x[A],K=_[A],oe=U[A],Z=F*V*4*A;for(let $=0;$<O.count;$++){const ee=$*Y;v===!0&&(r.fromBufferAttribute(O,$),S[Z+ee+0]=r.x,S[Z+ee+1]=r.y,S[Z+ee+2]=r.z,S[Z+ee+3]=0),b===!0&&(r.fromBufferAttribute(K,$),S[Z+ee+4]=r.x,S[Z+ee+5]=r.y,S[Z+ee+6]=r.z,S[Z+ee+7]=0),T===!0&&(r.fromBufferAttribute(oe,$),S[Z+ee+8]=r.x,S[Z+ee+9]=r.y,S[Z+ee+10]=r.z,S[Z+ee+11]=oe.itemSize===4?r.w:1)}}g={count:p,texture:G,size:new ct(F,V)},n.set(c,g),c.addEventListener("dispose",N)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let v=0;for(let T=0;T<h.length;T++)v+=h[T];const b=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(i,"morphTargetBaseInfluence",b),f.getUniforms().setValue(i,"morphTargetInfluences",h)}f.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:a}}function pb(i,e,t,n){let r=new WeakMap;function a(f){const h=n.render.frame,m=f.geometry,p=e.get(f,m);if(r.get(p)!==h&&(e.update(p),r.set(p,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",c)===!1&&f.addEventListener("dispose",c),r.get(f)!==h&&(t.update(f.instanceMatrix,i.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,i.ARRAY_BUFFER),r.set(f,h))),f.isSkinnedMesh){const g=f.skeleton;r.get(g)!==h&&(g.update(),r.set(g,h))}return p}function l(){r=new WeakMap}function c(f){const h=f.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:l}}const Rp=new Dn,Df=new wp(1,1),Cp=new hp,Pp=new Iy,Dp=new yp,Lf=[],If=[],Ff=new Float32Array(16),Uf=new Float32Array(9),Nf=new Float32Array(4);function Rs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Lf[r];if(a===void 0&&(a=new Float32Array(r),Lf[r]=a),e!==0){n.toArray(a,0);for(let l=1,c=0;l!==e;++l)c+=t,i[l].toArray(a,c)}return a}function gn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _n(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function No(i,e){let t=If[e];t===void 0&&(t=new Int32Array(e),If[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function mb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function gb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2fv(this.addr,e),_n(t,e)}}function _b(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gn(t,e))return;i.uniform3fv(this.addr,e),_n(t,e)}}function vb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4fv(this.addr,e),_n(t,e)}}function yb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(gn(t,n))return;Nf.set(n),i.uniformMatrix2fv(this.addr,!1,Nf),_n(t,n)}}function xb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(gn(t,n))return;Uf.set(n),i.uniformMatrix3fv(this.addr,!1,Uf),_n(t,n)}}function wb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(gn(t,n))return;Ff.set(n),i.uniformMatrix4fv(this.addr,!1,Ff),_n(t,n)}}function Eb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function bb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2iv(this.addr,e),_n(t,e)}}function Sb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;i.uniform3iv(this.addr,e),_n(t,e)}}function Mb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4iv(this.addr,e),_n(t,e)}}function Tb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ab(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2uiv(this.addr,e),_n(t,e)}}function Rb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;i.uniform3uiv(this.addr,e),_n(t,e)}}function Cb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4uiv(this.addr,e),_n(t,e)}}function Pb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(Df.compareFunction=cp,a=Df):a=Rp,t.setTexture2D(e||a,r)}function Db(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Pp,r)}function Lb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Dp,r)}function Ib(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Cp,r)}function Fb(i){switch(i){case 5126:return mb;case 35664:return gb;case 35665:return _b;case 35666:return vb;case 35674:return yb;case 35675:return xb;case 35676:return wb;case 5124:case 35670:return Eb;case 35667:case 35671:return bb;case 35668:case 35672:return Sb;case 35669:case 35673:return Mb;case 5125:return Tb;case 36294:return Ab;case 36295:return Rb;case 36296:return Cb;case 35678:case 36198:case 36298:case 36306:case 35682:return Pb;case 35679:case 36299:case 36307:return Db;case 35680:case 36300:case 36308:case 36293:return Lb;case 36289:case 36303:case 36311:case 36292:return Ib}}function Ub(i,e){i.uniform1fv(this.addr,e)}function Nb(i,e){const t=Rs(e,this.size,2);i.uniform2fv(this.addr,t)}function Ob(i,e){const t=Rs(e,this.size,3);i.uniform3fv(this.addr,t)}function kb(i,e){const t=Rs(e,this.size,4);i.uniform4fv(this.addr,t)}function Bb(i,e){const t=Rs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function zb(i,e){const t=Rs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Hb(i,e){const t=Rs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Vb(i,e){i.uniform1iv(this.addr,e)}function Gb(i,e){i.uniform2iv(this.addr,e)}function Wb(i,e){i.uniform3iv(this.addr,e)}function $b(i,e){i.uniform4iv(this.addr,e)}function jb(i,e){i.uniform1uiv(this.addr,e)}function Xb(i,e){i.uniform2uiv(this.addr,e)}function qb(i,e){i.uniform3uiv(this.addr,e)}function Yb(i,e){i.uniform4uiv(this.addr,e)}function Kb(i,e,t){const n=this.cache,r=e.length,a=No(t,r);gn(n,a)||(i.uniform1iv(this.addr,a),_n(n,a));for(let l=0;l!==r;++l)t.setTexture2D(e[l]||Rp,a[l])}function Zb(i,e,t){const n=this.cache,r=e.length,a=No(t,r);gn(n,a)||(i.uniform1iv(this.addr,a),_n(n,a));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||Pp,a[l])}function Jb(i,e,t){const n=this.cache,r=e.length,a=No(t,r);gn(n,a)||(i.uniform1iv(this.addr,a),_n(n,a));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||Dp,a[l])}function Qb(i,e,t){const n=this.cache,r=e.length,a=No(t,r);gn(n,a)||(i.uniform1iv(this.addr,a),_n(n,a));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||Cp,a[l])}function eS(i){switch(i){case 5126:return Ub;case 35664:return Nb;case 35665:return Ob;case 35666:return kb;case 35674:return Bb;case 35675:return zb;case 35676:return Hb;case 5124:case 35670:return Vb;case 35667:case 35671:return Gb;case 35668:case 35672:return Wb;case 35669:case 35673:return $b;case 5125:return jb;case 36294:return Xb;case 36295:return qb;case 36296:return Yb;case 35678:case 36198:case 36298:case 36306:case 35682:return Kb;case 35679:case 36299:case 36307:return Zb;case 35680:case 36300:case 36308:case 36293:return Jb;case 36289:case 36303:case 36311:case 36292:return Qb}}class tS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Fb(t.type)}}class nS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eS(t.type)}}class iS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,l=r.length;a!==l;++a){const c=r[a];c.setValue(e,t[c.id],n)}}}const oc=/(\w+)(\])?(\[|\.)?/g;function Of(i,e){i.seq.push(e),i.map[e.id]=e}function rS(i,e,t){const n=i.name,r=n.length;for(oc.lastIndex=0;;){const a=oc.exec(n),l=oc.lastIndex;let c=a[1];const f=a[2]==="]",h=a[3];if(f&&(c=c|0),h===void 0||h==="["&&l+2===r){Of(t,h===void 0?new tS(c,i,e):new nS(c,i,e));break}else{let p=t.map[c];p===void 0&&(p=new iS(c),Of(t,p)),t=p}}}class wo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),l=e.getUniformLocation(t,a.name);rS(a,l,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,l=t.length;a!==l;++a){const c=t[a],f=n[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function kf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const sS=37297;let aS=0;function oS(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=r;l<a;l++){const c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}const Bf=new yt;function lS(i){kt._getMatrix(Bf,kt.workingColorSpace,i);const e=`mat3( ${Bf.elements.map(t=>t.toFixed(4))} )`;switch(kt.getTransfer(i)){case Mo:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function zf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+oS(i.getShaderSource(e),c)}else return a}function cS(i,e){const t=lS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function uS(i,e){let t;switch(e){case ly:t="Linear";break;case cy:t="Reinhard";break;case uy:t="Cineon";break;case Qd:t="ACESFilmic";break;case fy:t="AgX";break;case dy:t="Neutral";break;case hy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const co=new Q;function hS(){kt.getLuminanceCoefficients(co);const i=co.x.toFixed(4),e=co.y.toFixed(4),t=co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function dS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),l=a.name;let c=1;a.type===i.FLOAT_MAT2&&(c=2),a.type===i.FLOAT_MAT3&&(c=3),a.type===i.FLOAT_MAT4&&(c=4),t[l]={type:a.type,location:i.getAttribLocation(e,l),locationSize:c}}return t}function oa(i){return i!==""}function Hf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mS=/^[ \t]*#include +<([\w\d./]+)>/gm;function lu(i){return i.replace(mS,_S)}const gS=new Map;function _S(i,e){let t=wt[e];if(t===void 0){const n=gS.get(e);if(n!==void 0)t=wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return lu(t)}const vS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gf(i){return i.replace(vS,yS)}function yS(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Wf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Jd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function wS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bs:case Ss:e="ENVMAP_TYPE_CUBE";break;case Lo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ES(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ss&&(e="ENVMAP_MODE_REFRACTION"),e}function bS(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Do:e="ENVMAP_BLENDING_MULTIPLY";break;case ay:e="ENVMAP_BLENDING_MIX";break;case oy:e="ENVMAP_BLENDING_ADD";break}return e}function SS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function MS(i,e,t,n){const r=i.getContext(),a=t.defines;let l=t.vertexShader,c=t.fragmentShader;const f=xS(t),h=wS(t),m=ES(t),p=bS(t),g=SS(t),v=fS(t),b=dS(a),T=r.createProgram();let x,_,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(oa).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(oa).join(`
`),_.length>0&&(_+=`
`)):(x=[Wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),_=[Wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+p:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?wt.tonemapping_pars_fragment:"",t.toneMapping!==Ji?uS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,cS("linearToOutputTexel",t.outputColorSpace),hS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oa).join(`
`)),l=lu(l),l=Hf(l,t),l=Vf(l,t),c=lu(c),c=Hf(c,t),c=Vf(c,t),l=Gf(l),c=Gf(c),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,x=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===Gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const I=U+x+l,F=U+_+c,V=kf(r,r.VERTEX_SHADER,I),S=kf(r,r.FRAGMENT_SHADER,F);r.attachShader(T,V),r.attachShader(T,S),t.index0AttributeName!==void 0?r.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function G(O){if(i.debug.checkShaderErrors){const K=r.getProgramInfoLog(T)||"",oe=r.getShaderInfoLog(V)||"",Z=r.getShaderInfoLog(S)||"",$=K.trim(),ee=oe.trim(),pe=Z.trim();let se=!0,Ee=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,T,V,S);else{const De=zf(r,V,"vertex"),je=zf(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+$+`
`+De+`
`+je)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(ee===""||pe==="")&&(Ee=!1);Ee&&(O.diagnostics={runnable:se,programLog:$,vertexShader:{log:ee,prefix:x},fragmentShader:{log:pe,prefix:_}})}r.deleteShader(V),r.deleteShader(S),Y=new wo(r,T),N=pS(r,T)}let Y;this.getUniforms=function(){return Y===void 0&&G(this),Y};let N;this.getAttributes=function(){return N===void 0&&G(this),N};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(T,sS)),A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=aS++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=V,this.fragmentShader=S,this}let TS=0;class AS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new RS(e),t.set(e,n)),n}}class RS{constructor(e){this.id=TS++,this.code=e,this.usedTimes=0}}function CS(i,e,t,n,r,a,l){const c=new fp,f=new AS,h=new Set,m=[],p=r.logarithmicDepthBuffer,g=r.vertexTextures;let v=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(N){return h.add(N),N===0?"uv":`uv${N}`}function x(N,A,O,K,oe){const Z=K.fog,$=oe.geometry,ee=N.isMeshStandardMaterial?K.environment:null,pe=(N.isMeshStandardMaterial?t:e).get(N.envMap||ee),se=pe&&pe.mapping===Lo?pe.image.height:null,Ee=b[N.type];N.precision!==null&&(v=r.getMaxPrecision(N.precision),v!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",v,"instead."));const De=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,je=De!==void 0?De.length:0;let at=0;$.morphAttributes.position!==void 0&&(at=1),$.morphAttributes.normal!==void 0&&(at=2),$.morphAttributes.color!==void 0&&(at=3);let Et,lt,Qe,de;if(Ee){const pt=xi[Ee];Et=pt.vertexShader,lt=pt.fragmentShader}else Et=N.vertexShader,lt=N.fragmentShader,f.update(N),Qe=f.getVertexShaderID(N),de=f.getFragmentShaderID(N);const ye=i.getRenderTarget(),ue=i.state.buffers.depth.getReversed(),_e=oe.isInstancedMesh===!0,Ae=oe.isBatchedMesh===!0,dt=!!N.map,Nt=!!N.matcap,W=!!pe,bt=!!N.aoMap,rt=!!N.lightMap,et=!!N.bumpMap,Ge=!!N.normalMap,zt=!!N.displacementMap,He=!!N.emissiveMap,ot=!!N.metalnessMap,Ht=!!N.roughnessMap,St=N.anisotropy>0,k=N.clearcoat>0,R=N.dispersion>0,ne=N.iridescence>0,fe=N.sheen>0,we=N.transmission>0,me=St&&!!N.anisotropyMap,$e=k&&!!N.clearcoatMap,Ie=k&&!!N.clearcoatNormalMap,Xe=k&&!!N.clearcoatRoughnessMap,qe=ne&&!!N.iridescenceMap,Re=ne&&!!N.iridescenceThicknessMap,Oe=fe&&!!N.sheenColorMap,tt=fe&&!!N.sheenRoughnessMap,Ye=!!N.specularMap,Ue=!!N.specularColorMap,ut=!!N.specularIntensityMap,X=we&&!!N.transmissionMap,Pe=we&&!!N.thicknessMap,Fe=!!N.gradientMap,Be=!!N.alphaMap,J=N.alphaTest>0,j=!!N.alphaHash,ze=!!N.extensions;let st=Ji;N.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(st=i.toneMapping);const Dt={shaderID:Ee,shaderType:N.type,shaderName:N.name,vertexShader:Et,fragmentShader:lt,defines:N.defines,customVertexShaderID:Qe,customFragmentShaderID:de,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:v,batching:Ae,batchingColor:Ae&&oe._colorsTexture!==null,instancing:_e,instancingColor:_e&&oe.instanceColor!==null,instancingMorph:_e&&oe.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Ms,alphaToCoverage:!!N.alphaToCoverage,map:dt,matcap:Nt,envMap:W,envMapMode:W&&pe.mapping,envMapCubeUVHeight:se,aoMap:bt,lightMap:rt,bumpMap:et,normalMap:Ge,displacementMap:g&&zt,emissiveMap:He,normalMapObjectSpace:Ge&&N.normalMapType===gy,normalMapTangentSpace:Ge&&N.normalMapType===Io,metalnessMap:ot,roughnessMap:Ht,anisotropy:St,anisotropyMap:me,clearcoat:k,clearcoatMap:$e,clearcoatNormalMap:Ie,clearcoatRoughnessMap:Xe,dispersion:R,iridescence:ne,iridescenceMap:qe,iridescenceThicknessMap:Re,sheen:fe,sheenColorMap:Oe,sheenRoughnessMap:tt,specularMap:Ye,specularColorMap:Ue,specularIntensityMap:ut,transmission:we,transmissionMap:X,thicknessMap:Pe,gradientMap:Fe,opaque:N.transparent===!1&&N.blending===gs&&N.alphaToCoverage===!1,alphaMap:Be,alphaTest:J,alphaHash:j,combine:N.combine,mapUv:dt&&T(N.map.channel),aoMapUv:bt&&T(N.aoMap.channel),lightMapUv:rt&&T(N.lightMap.channel),bumpMapUv:et&&T(N.bumpMap.channel),normalMapUv:Ge&&T(N.normalMap.channel),displacementMapUv:zt&&T(N.displacementMap.channel),emissiveMapUv:He&&T(N.emissiveMap.channel),metalnessMapUv:ot&&T(N.metalnessMap.channel),roughnessMapUv:Ht&&T(N.roughnessMap.channel),anisotropyMapUv:me&&T(N.anisotropyMap.channel),clearcoatMapUv:$e&&T(N.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&T(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&T(N.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&T(N.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&T(N.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&T(N.sheenColorMap.channel),sheenRoughnessMapUv:tt&&T(N.sheenRoughnessMap.channel),specularMapUv:Ye&&T(N.specularMap.channel),specularColorMapUv:Ue&&T(N.specularColorMap.channel),specularIntensityMapUv:ut&&T(N.specularIntensityMap.channel),transmissionMapUv:X&&T(N.transmissionMap.channel),thicknessMapUv:Pe&&T(N.thicknessMap.channel),alphaMapUv:Be&&T(N.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ge||St),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!$.attributes.uv&&(dt||Be),fog:!!Z,useFog:N.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:N.flatShading===!0&&N.wireframe===!1,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ue,skinning:oe.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:je,morphTextureStride:at,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:N.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:dt&&N.map.isVideoTexture===!0&&kt.getTransfer(N.map.colorSpace)===Gt,decodeVideoTextureEmissive:He&&N.emissiveMap.isVideoTexture===!0&&kt.getTransfer(N.emissiveMap.colorSpace)===Gt,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===Ii,flipSided:N.side===Cn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:ze&&N.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&N.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return Dt.vertexUv1s=h.has(1),Dt.vertexUv2s=h.has(2),Dt.vertexUv3s=h.has(3),h.clear(),Dt}function _(N){const A=[];if(N.shaderID?A.push(N.shaderID):(A.push(N.customVertexShaderID),A.push(N.customFragmentShaderID)),N.defines!==void 0)for(const O in N.defines)A.push(O),A.push(N.defines[O]);return N.isRawShaderMaterial===!1&&(U(A,N),I(A,N),A.push(i.outputColorSpace)),A.push(N.customProgramCacheKey),A.join()}function U(N,A){N.push(A.precision),N.push(A.outputColorSpace),N.push(A.envMapMode),N.push(A.envMapCubeUVHeight),N.push(A.mapUv),N.push(A.alphaMapUv),N.push(A.lightMapUv),N.push(A.aoMapUv),N.push(A.bumpMapUv),N.push(A.normalMapUv),N.push(A.displacementMapUv),N.push(A.emissiveMapUv),N.push(A.metalnessMapUv),N.push(A.roughnessMapUv),N.push(A.anisotropyMapUv),N.push(A.clearcoatMapUv),N.push(A.clearcoatNormalMapUv),N.push(A.clearcoatRoughnessMapUv),N.push(A.iridescenceMapUv),N.push(A.iridescenceThicknessMapUv),N.push(A.sheenColorMapUv),N.push(A.sheenRoughnessMapUv),N.push(A.specularMapUv),N.push(A.specularColorMapUv),N.push(A.specularIntensityMapUv),N.push(A.transmissionMapUv),N.push(A.thicknessMapUv),N.push(A.combine),N.push(A.fogExp2),N.push(A.sizeAttenuation),N.push(A.morphTargetsCount),N.push(A.morphAttributeCount),N.push(A.numDirLights),N.push(A.numPointLights),N.push(A.numSpotLights),N.push(A.numSpotLightMaps),N.push(A.numHemiLights),N.push(A.numRectAreaLights),N.push(A.numDirLightShadows),N.push(A.numPointLightShadows),N.push(A.numSpotLightShadows),N.push(A.numSpotLightShadowsWithMaps),N.push(A.numLightProbes),N.push(A.shadowMapType),N.push(A.toneMapping),N.push(A.numClippingPlanes),N.push(A.numClipIntersection),N.push(A.depthPacking)}function I(N,A){c.disableAll(),A.supportsVertexTextures&&c.enable(0),A.instancing&&c.enable(1),A.instancingColor&&c.enable(2),A.instancingMorph&&c.enable(3),A.matcap&&c.enable(4),A.envMap&&c.enable(5),A.normalMapObjectSpace&&c.enable(6),A.normalMapTangentSpace&&c.enable(7),A.clearcoat&&c.enable(8),A.iridescence&&c.enable(9),A.alphaTest&&c.enable(10),A.vertexColors&&c.enable(11),A.vertexAlphas&&c.enable(12),A.vertexUv1s&&c.enable(13),A.vertexUv2s&&c.enable(14),A.vertexUv3s&&c.enable(15),A.vertexTangents&&c.enable(16),A.anisotropy&&c.enable(17),A.alphaHash&&c.enable(18),A.batching&&c.enable(19),A.dispersion&&c.enable(20),A.batchingColor&&c.enable(21),A.gradientMap&&c.enable(22),N.push(c.mask),c.disableAll(),A.fog&&c.enable(0),A.useFog&&c.enable(1),A.flatShading&&c.enable(2),A.logarithmicDepthBuffer&&c.enable(3),A.reversedDepthBuffer&&c.enable(4),A.skinning&&c.enable(5),A.morphTargets&&c.enable(6),A.morphNormals&&c.enable(7),A.morphColors&&c.enable(8),A.premultipliedAlpha&&c.enable(9),A.shadowMapEnabled&&c.enable(10),A.doubleSided&&c.enable(11),A.flipSided&&c.enable(12),A.useDepthPacking&&c.enable(13),A.dithering&&c.enable(14),A.transmission&&c.enable(15),A.sheen&&c.enable(16),A.opaque&&c.enable(17),A.pointsUvs&&c.enable(18),A.decodeVideoTexture&&c.enable(19),A.decodeVideoTextureEmissive&&c.enable(20),A.alphaToCoverage&&c.enable(21),N.push(c.mask)}function F(N){const A=b[N.type];let O;if(A){const K=xi[A];O=jy.clone(K.uniforms)}else O=N.uniforms;return O}function V(N,A){let O;for(let K=0,oe=m.length;K<oe;K++){const Z=m[K];if(Z.cacheKey===A){O=Z,++O.usedTimes;break}}return O===void 0&&(O=new MS(i,A,N,a),m.push(O)),O}function S(N){if(--N.usedTimes===0){const A=m.indexOf(N);m[A]=m[m.length-1],m.pop(),N.destroy()}}function G(N){f.remove(N)}function Y(){f.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:F,acquireProgram:V,releaseProgram:S,releaseShaderCache:G,programs:m,dispose:Y}}function PS(){let i=new WeakMap;function e(l){return i.has(l)}function t(l){let c=i.get(l);return c===void 0&&(c={},i.set(l,c)),c}function n(l){i.delete(l)}function r(l,c,f){i.get(l)[c]=f}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function DS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function $f(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function jf(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function l(p,g,v,b,T,x){let _=i[e];return _===void 0?(_={id:p.id,object:p,geometry:g,material:v,groupOrder:b,renderOrder:p.renderOrder,z:T,group:x},i[e]=_):(_.id=p.id,_.object=p,_.geometry=g,_.material=v,_.groupOrder=b,_.renderOrder=p.renderOrder,_.z=T,_.group=x),e++,_}function c(p,g,v,b,T,x){const _=l(p,g,v,b,T,x);v.transmission>0?n.push(_):v.transparent===!0?r.push(_):t.push(_)}function f(p,g,v,b,T,x){const _=l(p,g,v,b,T,x);v.transmission>0?n.unshift(_):v.transparent===!0?r.unshift(_):t.unshift(_)}function h(p,g){t.length>1&&t.sort(p||DS),n.length>1&&n.sort(g||$f),r.length>1&&r.sort(g||$f)}function m(){for(let p=e,g=i.length;p<g;p++){const v=i[p];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:c,unshift:f,finish:m,sort:h}}function LS(){let i=new WeakMap;function e(n,r){const a=i.get(n);let l;return a===void 0?(l=new jf,i.set(n,[l])):r>=a.length?(l=new jf,a.push(l)):l=a[r],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function IS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new ft};break;case"SpotLight":t={position:new Q,direction:new Q,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return i[e.id]=t,t}}}function FS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let US=0;function NS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function OS(i){const e=new IS,t=FS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new Q);const r=new Q,a=new jt,l=new jt;function c(h){let m=0,p=0,g=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let v=0,b=0,T=0,x=0,_=0,U=0,I=0,F=0,V=0,S=0,G=0;h.sort(NS);for(let N=0,A=h.length;N<A;N++){const O=h[N],K=O.color,oe=O.intensity,Z=O.distance,$=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)m+=K.r*oe,p+=K.g*oe,g+=K.b*oe;else if(O.isLightProbe){for(let ee=0;ee<9;ee++)n.probe[ee].addScaledVector(O.sh.coefficients[ee],oe);G++}else if(O.isDirectionalLight){const ee=e.get(O);if(ee.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const pe=O.shadow,se=t.get(O);se.shadowIntensity=pe.intensity,se.shadowBias=pe.bias,se.shadowNormalBias=pe.normalBias,se.shadowRadius=pe.radius,se.shadowMapSize=pe.mapSize,n.directionalShadow[v]=se,n.directionalShadowMap[v]=$,n.directionalShadowMatrix[v]=O.shadow.matrix,U++}n.directional[v]=ee,v++}else if(O.isSpotLight){const ee=e.get(O);ee.position.setFromMatrixPosition(O.matrixWorld),ee.color.copy(K).multiplyScalar(oe),ee.distance=Z,ee.coneCos=Math.cos(O.angle),ee.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ee.decay=O.decay,n.spot[T]=ee;const pe=O.shadow;if(O.map&&(n.spotLightMap[V]=O.map,V++,pe.updateMatrices(O),O.castShadow&&S++),n.spotLightMatrix[T]=pe.matrix,O.castShadow){const se=t.get(O);se.shadowIntensity=pe.intensity,se.shadowBias=pe.bias,se.shadowNormalBias=pe.normalBias,se.shadowRadius=pe.radius,se.shadowMapSize=pe.mapSize,n.spotShadow[T]=se,n.spotShadowMap[T]=$,F++}T++}else if(O.isRectAreaLight){const ee=e.get(O);ee.color.copy(K).multiplyScalar(oe),ee.halfWidth.set(O.width*.5,0,0),ee.halfHeight.set(0,O.height*.5,0),n.rectArea[x]=ee,x++}else if(O.isPointLight){const ee=e.get(O);if(ee.color.copy(O.color).multiplyScalar(O.intensity),ee.distance=O.distance,ee.decay=O.decay,O.castShadow){const pe=O.shadow,se=t.get(O);se.shadowIntensity=pe.intensity,se.shadowBias=pe.bias,se.shadowNormalBias=pe.normalBias,se.shadowRadius=pe.radius,se.shadowMapSize=pe.mapSize,se.shadowCameraNear=pe.camera.near,se.shadowCameraFar=pe.camera.far,n.pointShadow[b]=se,n.pointShadowMap[b]=$,n.pointShadowMatrix[b]=O.shadow.matrix,I++}n.point[b]=ee,b++}else if(O.isHemisphereLight){const ee=e.get(O);ee.skyColor.copy(O.color).multiplyScalar(oe),ee.groundColor.copy(O.groundColor).multiplyScalar(oe),n.hemi[_]=ee,_++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ke.LTC_FLOAT_1,n.rectAreaLTC2=ke.LTC_FLOAT_2):(n.rectAreaLTC1=ke.LTC_HALF_1,n.rectAreaLTC2=ke.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=p,n.ambient[2]=g;const Y=n.hash;(Y.directionalLength!==v||Y.pointLength!==b||Y.spotLength!==T||Y.rectAreaLength!==x||Y.hemiLength!==_||Y.numDirectionalShadows!==U||Y.numPointShadows!==I||Y.numSpotShadows!==F||Y.numSpotMaps!==V||Y.numLightProbes!==G)&&(n.directional.length=v,n.spot.length=T,n.rectArea.length=x,n.point.length=b,n.hemi.length=_,n.directionalShadow.length=U,n.directionalShadowMap.length=U,n.pointShadow.length=I,n.pointShadowMap.length=I,n.spotShadow.length=F,n.spotShadowMap.length=F,n.directionalShadowMatrix.length=U,n.pointShadowMatrix.length=I,n.spotLightMatrix.length=F+V-S,n.spotLightMap.length=V,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=G,Y.directionalLength=v,Y.pointLength=b,Y.spotLength=T,Y.rectAreaLength=x,Y.hemiLength=_,Y.numDirectionalShadows=U,Y.numPointShadows=I,Y.numSpotShadows=F,Y.numSpotMaps=V,Y.numLightProbes=G,n.version=US++)}function f(h,m){let p=0,g=0,v=0,b=0,T=0;const x=m.matrixWorldInverse;for(let _=0,U=h.length;_<U;_++){const I=h[_];if(I.isDirectionalLight){const F=n.directional[p];F.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),F.direction.sub(r),F.direction.transformDirection(x),p++}else if(I.isSpotLight){const F=n.spot[v];F.position.setFromMatrixPosition(I.matrixWorld),F.position.applyMatrix4(x),F.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),F.direction.sub(r),F.direction.transformDirection(x),v++}else if(I.isRectAreaLight){const F=n.rectArea[b];F.position.setFromMatrixPosition(I.matrixWorld),F.position.applyMatrix4(x),l.identity(),a.copy(I.matrixWorld),a.premultiply(x),l.extractRotation(a),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),F.halfWidth.applyMatrix4(l),F.halfHeight.applyMatrix4(l),b++}else if(I.isPointLight){const F=n.point[g];F.position.setFromMatrixPosition(I.matrixWorld),F.position.applyMatrix4(x),g++}else if(I.isHemisphereLight){const F=n.hemi[T];F.direction.setFromMatrixPosition(I.matrixWorld),F.direction.transformDirection(x),T++}}}return{setup:c,setupView:f,state:n}}function Xf(i){const e=new OS(i),t=[],n=[];function r(m){h.camera=m,t.length=0,n.length=0}function a(m){t.push(m)}function l(m){n.push(m)}function c(){e.setup(t)}function f(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:l}}function kS(i){let e=new WeakMap;function t(r,a=0){const l=e.get(r);let c;return l===void 0?(c=new Xf(i),e.set(r,[c])):a>=l.length?(c=new Xf(i),l.push(c)):c=l[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const BS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function HS(i,e,t){let n=new Ou;const r=new ct,a=new ct,l=new $t,c=new bp({depthPacking:lp}),f=new ox,h={},m=t.maxTextureSize,p={[Qi]:Cn,[Cn]:Qi,[Ii]:Ii},g=new nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:BS,fragmentShader:zS}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const b=new Ln;b.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new an(b,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zd;let _=this.type;this.render=function(S,G,Y){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||S.length===0)return;const N=i.getRenderTarget(),A=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),K=i.state;K.setBlending(Fi),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const oe=_!==Li&&this.type===Li,Z=_===Li&&this.type!==Li;for(let $=0,ee=S.length;$<ee;$++){const pe=S[$],se=pe.shadow;if(se===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;r.copy(se.mapSize);const Ee=se.getFrameExtents();if(r.multiply(Ee),a.copy(se.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(a.x=Math.floor(m/Ee.x),r.x=a.x*Ee.x,se.mapSize.x=a.x),r.y>m&&(a.y=Math.floor(m/Ee.y),r.y=a.y*Ee.y,se.mapSize.y=a.y)),se.map===null||oe===!0||Z===!0){const je=this.type!==Li?{minFilter:Pn,magFilter:Pn}:{};se.map!==null&&se.map.dispose(),se.map=new tr(r.x,r.y,je),se.map.texture.name=pe.name+".shadowMap",se.camera.updateProjectionMatrix()}i.setRenderTarget(se.map),i.clear();const De=se.getViewportCount();for(let je=0;je<De;je++){const at=se.getViewport(je);l.set(a.x*at.x,a.y*at.y,a.x*at.z,a.y*at.w),K.viewport(l),se.updateMatrices(pe,je),n=se.getFrustum(),F(G,Y,se.camera,pe,this.type)}se.isPointLightShadow!==!0&&this.type===Li&&U(se,Y),se.needsUpdate=!1}_=this.type,x.needsUpdate=!1,i.setRenderTarget(N,A,O)};function U(S,G){const Y=e.update(T);g.defines.VSM_SAMPLES!==S.blurSamples&&(g.defines.VSM_SAMPLES=S.blurSamples,v.defines.VSM_SAMPLES=S.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new tr(r.x,r.y)),g.uniforms.shadow_pass.value=S.map.texture,g.uniforms.resolution.value=S.mapSize,g.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(G,null,Y,g,T,null),v.uniforms.shadow_pass.value=S.mapPass.texture,v.uniforms.resolution.value=S.mapSize,v.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(G,null,Y,v,T,null)}function I(S,G,Y,N){let A=null;const O=Y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(O!==void 0)A=O;else if(A=Y.isPointLight===!0?f:c,i.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0||G.alphaToCoverage===!0){const K=A.uuid,oe=G.uuid;let Z=h[K];Z===void 0&&(Z={},h[K]=Z);let $=Z[oe];$===void 0&&($=A.clone(),Z[oe]=$,G.addEventListener("dispose",V)),A=$}if(A.visible=G.visible,A.wireframe=G.wireframe,N===Li?A.side=G.shadowSide!==null?G.shadowSide:G.side:A.side=G.shadowSide!==null?G.shadowSide:p[G.side],A.alphaMap=G.alphaMap,A.alphaTest=G.alphaToCoverage===!0?.5:G.alphaTest,A.map=G.map,A.clipShadows=G.clipShadows,A.clippingPlanes=G.clippingPlanes,A.clipIntersection=G.clipIntersection,A.displacementMap=G.displacementMap,A.displacementScale=G.displacementScale,A.displacementBias=G.displacementBias,A.wireframeLinewidth=G.wireframeLinewidth,A.linewidth=G.linewidth,Y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const K=i.properties.get(A);K.light=Y}return A}function F(S,G,Y,N,A){if(S.visible===!1)return;if(S.layers.test(G.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===Li)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld);const oe=e.update(S),Z=S.material;if(Array.isArray(Z)){const $=oe.groups;for(let ee=0,pe=$.length;ee<pe;ee++){const se=$[ee],Ee=Z[se.materialIndex];if(Ee&&Ee.visible){const De=I(S,Ee,N,A);S.onBeforeShadow(i,S,G,Y,oe,De,se),i.renderBufferDirect(Y,null,oe,De,S,se),S.onAfterShadow(i,S,G,Y,oe,De,se)}}}else if(Z.visible){const $=I(S,Z,N,A);S.onBeforeShadow(i,S,G,Y,oe,$,null),i.renderBufferDirect(Y,null,oe,$,S,null),S.onAfterShadow(i,S,G,Y,oe,$,null)}}const K=S.children;for(let oe=0,Z=K.length;oe<Z;oe++)F(K[oe],G,Y,N,A)}function V(S){S.target.removeEventListener("dispose",V);for(const Y in h){const N=h[Y],A=S.target.uuid;A in N&&(N[A].dispose(),delete N[A])}}}const VS={[yc]:xc,[wc]:Sc,[Ec]:Mc,[Es]:bc,[xc]:yc,[Sc]:wc,[Mc]:Ec,[bc]:Es};function GS(i,e){function t(){let X=!1;const Pe=new $t;let Fe=null;const Be=new $t(0,0,0,0);return{setMask:function(J){Fe!==J&&!X&&(i.colorMask(J,J,J,J),Fe=J)},setLocked:function(J){X=J},setClear:function(J,j,ze,st,Dt){Dt===!0&&(J*=st,j*=st,ze*=st),Pe.set(J,j,ze,st),Be.equals(Pe)===!1&&(i.clearColor(J,j,ze,st),Be.copy(Pe))},reset:function(){X=!1,Fe=null,Be.set(-1,0,0,0)}}}function n(){let X=!1,Pe=!1,Fe=null,Be=null,J=null;return{setReversed:function(j){if(Pe!==j){const ze=e.get("EXT_clip_control");j?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),Pe=j;const st=J;J=null,this.setClear(st)}},getReversed:function(){return Pe},setTest:function(j){j?ye(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function(j){Fe!==j&&!X&&(i.depthMask(j),Fe=j)},setFunc:function(j){if(Pe&&(j=VS[j]),Be!==j){switch(j){case yc:i.depthFunc(i.NEVER);break;case xc:i.depthFunc(i.ALWAYS);break;case wc:i.depthFunc(i.LESS);break;case Es:i.depthFunc(i.LEQUAL);break;case Ec:i.depthFunc(i.EQUAL);break;case bc:i.depthFunc(i.GEQUAL);break;case Sc:i.depthFunc(i.GREATER);break;case Mc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Be=j}},setLocked:function(j){X=j},setClear:function(j){J!==j&&(Pe&&(j=1-j),i.clearDepth(j),J=j)},reset:function(){X=!1,Fe=null,Be=null,J=null,Pe=!1}}}function r(){let X=!1,Pe=null,Fe=null,Be=null,J=null,j=null,ze=null,st=null,Dt=null;return{setTest:function(pt){X||(pt?ye(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(pt){Pe!==pt&&!X&&(i.stencilMask(pt),Pe=pt)},setFunc:function(pt,In,nn){(Fe!==pt||Be!==In||J!==nn)&&(i.stencilFunc(pt,In,nn),Fe=pt,Be=In,J=nn)},setOp:function(pt,In,nn){(j!==pt||ze!==In||st!==nn)&&(i.stencilOp(pt,In,nn),j=pt,ze=In,st=nn)},setLocked:function(pt){X=pt},setClear:function(pt){Dt!==pt&&(i.clearStencil(pt),Dt=pt)},reset:function(){X=!1,Pe=null,Fe=null,Be=null,J=null,j=null,ze=null,st=null,Dt=null}}}const a=new t,l=new n,c=new r,f=new WeakMap,h=new WeakMap;let m={},p={},g=new WeakMap,v=[],b=null,T=!1,x=null,_=null,U=null,I=null,F=null,V=null,S=null,G=new ft(0,0,0),Y=0,N=!1,A=null,O=null,K=null,oe=null,Z=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,pe=0;const se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(se)[1]),ee=pe>=1):se.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),ee=pe>=2);let Ee=null,De={};const je=i.getParameter(i.SCISSOR_BOX),at=i.getParameter(i.VIEWPORT),Et=new $t().fromArray(je),lt=new $t().fromArray(at);function Qe(X,Pe,Fe,Be){const J=new Uint8Array(4),j=i.createTexture();i.bindTexture(X,j),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<Fe;ze++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(Pe,0,i.RGBA,1,1,Be,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(Pe+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);return j}const de={};de[i.TEXTURE_2D]=Qe(i.TEXTURE_2D,i.TEXTURE_2D,1),de[i.TEXTURE_CUBE_MAP]=Qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[i.TEXTURE_2D_ARRAY]=Qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),de[i.TEXTURE_3D]=Qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ye(i.DEPTH_TEST),l.setFunc(Es),et(!1),Ge(Oh),ye(i.CULL_FACE),bt(Fi);function ye(X){m[X]!==!0&&(i.enable(X),m[X]=!0)}function ue(X){m[X]!==!1&&(i.disable(X),m[X]=!1)}function _e(X,Pe){return p[X]!==Pe?(i.bindFramebuffer(X,Pe),p[X]=Pe,X===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=Pe),X===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Ae(X,Pe){let Fe=v,Be=!1;if(X){Fe=g.get(Pe),Fe===void 0&&(Fe=[],g.set(Pe,Fe));const J=X.textures;if(Fe.length!==J.length||Fe[0]!==i.COLOR_ATTACHMENT0){for(let j=0,ze=J.length;j<ze;j++)Fe[j]=i.COLOR_ATTACHMENT0+j;Fe.length=J.length,Be=!0}}else Fe[0]!==i.BACK&&(Fe[0]=i.BACK,Be=!0);Be&&i.drawBuffers(Fe)}function dt(X){return b!==X?(i.useProgram(X),b=X,!0):!1}const Nt={[Sr]:i.FUNC_ADD,[G0]:i.FUNC_SUBTRACT,[W0]:i.FUNC_REVERSE_SUBTRACT};Nt[$0]=i.MIN,Nt[j0]=i.MAX;const W={[X0]:i.ZERO,[q0]:i.ONE,[Y0]:i.SRC_COLOR,[_c]:i.SRC_ALPHA,[ty]:i.SRC_ALPHA_SATURATE,[Q0]:i.DST_COLOR,[Z0]:i.DST_ALPHA,[K0]:i.ONE_MINUS_SRC_COLOR,[vc]:i.ONE_MINUS_SRC_ALPHA,[ey]:i.ONE_MINUS_DST_COLOR,[J0]:i.ONE_MINUS_DST_ALPHA,[ny]:i.CONSTANT_COLOR,[iy]:i.ONE_MINUS_CONSTANT_COLOR,[ry]:i.CONSTANT_ALPHA,[sy]:i.ONE_MINUS_CONSTANT_ALPHA};function bt(X,Pe,Fe,Be,J,j,ze,st,Dt,pt){if(X===Fi){T===!0&&(ue(i.BLEND),T=!1);return}if(T===!1&&(ye(i.BLEND),T=!0),X!==V0){if(X!==x||pt!==N){if((_!==Sr||F!==Sr)&&(i.blendEquation(i.FUNC_ADD),_=Sr,F=Sr),pt)switch(X){case gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kh:i.blendFunc(i.ONE,i.ONE);break;case Bh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Bh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}U=null,I=null,V=null,S=null,G.set(0,0,0),Y=0,x=X,N=pt}return}J=J||Pe,j=j||Fe,ze=ze||Be,(Pe!==_||J!==F)&&(i.blendEquationSeparate(Nt[Pe],Nt[J]),_=Pe,F=J),(Fe!==U||Be!==I||j!==V||ze!==S)&&(i.blendFuncSeparate(W[Fe],W[Be],W[j],W[ze]),U=Fe,I=Be,V=j,S=ze),(st.equals(G)===!1||Dt!==Y)&&(i.blendColor(st.r,st.g,st.b,Dt),G.copy(st),Y=Dt),x=X,N=!1}function rt(X,Pe){X.side===Ii?ue(i.CULL_FACE):ye(i.CULL_FACE);let Fe=X.side===Cn;Pe&&(Fe=!Fe),et(Fe),X.blending===gs&&X.transparent===!1?bt(Fi):bt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),l.setFunc(X.depthFunc),l.setTest(X.depthTest),l.setMask(X.depthWrite),a.setMask(X.colorWrite);const Be=X.stencilWrite;c.setTest(Be),Be&&(c.setMask(X.stencilWriteMask),c.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),c.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),He(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ye(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(X){A!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),A=X)}function Ge(X){X!==z0?(ye(i.CULL_FACE),X!==O&&(X===Oh?i.cullFace(i.BACK):X===H0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),O=X}function zt(X){X!==K&&(ee&&i.lineWidth(X),K=X)}function He(X,Pe,Fe){X?(ye(i.POLYGON_OFFSET_FILL),(oe!==Pe||Z!==Fe)&&(i.polygonOffset(Pe,Fe),oe=Pe,Z=Fe)):ue(i.POLYGON_OFFSET_FILL)}function ot(X){X?ye(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)}function Ht(X){X===void 0&&(X=i.TEXTURE0+$-1),Ee!==X&&(i.activeTexture(X),Ee=X)}function St(X,Pe,Fe){Fe===void 0&&(Ee===null?Fe=i.TEXTURE0+$-1:Fe=Ee);let Be=De[Fe];Be===void 0&&(Be={type:void 0,texture:void 0},De[Fe]=Be),(Be.type!==X||Be.texture!==Pe)&&(Ee!==Fe&&(i.activeTexture(Fe),Ee=Fe),i.bindTexture(X,Pe||de[X]),Be.type=X,Be.texture=Pe)}function k(){const X=De[Ee];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function R(){try{i.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ne(){try{i.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function fe(){try{i.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function we(){try{i.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function me(){try{i.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $e(){try{i.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ie(){try{i.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xe(){try{i.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qe(){try{i.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Re(){try{i.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Oe(X){Et.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),Et.copy(X))}function tt(X){lt.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),lt.copy(X))}function Ye(X,Pe){let Fe=h.get(Pe);Fe===void 0&&(Fe=new WeakMap,h.set(Pe,Fe));let Be=Fe.get(X);Be===void 0&&(Be=i.getUniformBlockIndex(Pe,X.name),Fe.set(X,Be))}function Ue(X,Pe){const Be=h.get(Pe).get(X);f.get(Pe)!==Be&&(i.uniformBlockBinding(Pe,Be,X.__bindingPointIndex),f.set(Pe,Be))}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),l.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},Ee=null,De={},p={},g=new WeakMap,v=[],b=null,T=!1,x=null,_=null,U=null,I=null,F=null,V=null,S=null,G=new ft(0,0,0),Y=0,N=!1,A=null,O=null,K=null,oe=null,Z=null,Et.set(0,0,i.canvas.width,i.canvas.height),lt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ye,disable:ue,bindFramebuffer:_e,drawBuffers:Ae,useProgram:dt,setBlending:bt,setMaterial:rt,setFlipSided:et,setCullFace:Ge,setLineWidth:zt,setPolygonOffset:He,setScissorTest:ot,activeTexture:Ht,bindTexture:St,unbindTexture:k,compressedTexImage2D:R,compressedTexImage3D:ne,texImage2D:qe,texImage3D:Re,updateUBOMapping:Ye,uniformBlockBinding:Ue,texStorage2D:Ie,texStorage3D:Xe,texSubImage2D:fe,texSubImage3D:we,compressedTexSubImage2D:me,compressedTexSubImage3D:$e,scissor:Oe,viewport:tt,reset:ut}}function WS(i,e,t,n,r,a,l){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ct,m=new WeakMap;let p;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(k,R){return v?new OffscreenCanvas(k,R):Ao("canvas")}function T(k,R,ne){let fe=1;const we=St(k);if((we.width>ne||we.height>ne)&&(fe=ne/Math.max(we.width,we.height)),fe<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const me=Math.floor(fe*we.width),$e=Math.floor(fe*we.height);p===void 0&&(p=b(me,$e));const Ie=R?b(me,$e):p;return Ie.width=me,Ie.height=$e,Ie.getContext("2d").drawImage(k,0,0,me,$e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+we.width+"x"+we.height+") to ("+me+"x"+$e+")."),Ie}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+we.width+"x"+we.height+")."),k;return k}function x(k){return k.generateMipmaps}function _(k){i.generateMipmap(k)}function U(k){return k.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?i.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function I(k,R,ne,fe,we=!1){if(k!==null){if(i[k]!==void 0)return i[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let me=R;if(R===i.RED&&(ne===i.FLOAT&&(me=i.R32F),ne===i.HALF_FLOAT&&(me=i.R16F),ne===i.UNSIGNED_BYTE&&(me=i.R8)),R===i.RED_INTEGER&&(ne===i.UNSIGNED_BYTE&&(me=i.R8UI),ne===i.UNSIGNED_SHORT&&(me=i.R16UI),ne===i.UNSIGNED_INT&&(me=i.R32UI),ne===i.BYTE&&(me=i.R8I),ne===i.SHORT&&(me=i.R16I),ne===i.INT&&(me=i.R32I)),R===i.RG&&(ne===i.FLOAT&&(me=i.RG32F),ne===i.HALF_FLOAT&&(me=i.RG16F),ne===i.UNSIGNED_BYTE&&(me=i.RG8)),R===i.RG_INTEGER&&(ne===i.UNSIGNED_BYTE&&(me=i.RG8UI),ne===i.UNSIGNED_SHORT&&(me=i.RG16UI),ne===i.UNSIGNED_INT&&(me=i.RG32UI),ne===i.BYTE&&(me=i.RG8I),ne===i.SHORT&&(me=i.RG16I),ne===i.INT&&(me=i.RG32I)),R===i.RGB_INTEGER&&(ne===i.UNSIGNED_BYTE&&(me=i.RGB8UI),ne===i.UNSIGNED_SHORT&&(me=i.RGB16UI),ne===i.UNSIGNED_INT&&(me=i.RGB32UI),ne===i.BYTE&&(me=i.RGB8I),ne===i.SHORT&&(me=i.RGB16I),ne===i.INT&&(me=i.RGB32I)),R===i.RGBA_INTEGER&&(ne===i.UNSIGNED_BYTE&&(me=i.RGBA8UI),ne===i.UNSIGNED_SHORT&&(me=i.RGBA16UI),ne===i.UNSIGNED_INT&&(me=i.RGBA32UI),ne===i.BYTE&&(me=i.RGBA8I),ne===i.SHORT&&(me=i.RGBA16I),ne===i.INT&&(me=i.RGBA32I)),R===i.RGB&&(ne===i.UNSIGNED_INT_5_9_9_9_REV&&(me=i.RGB9_E5),ne===i.UNSIGNED_INT_10F_11F_11F_REV&&(me=i.R11F_G11F_B10F)),R===i.RGBA){const $e=we?Mo:kt.getTransfer(fe);ne===i.FLOAT&&(me=i.RGBA32F),ne===i.HALF_FLOAT&&(me=i.RGBA16F),ne===i.UNSIGNED_BYTE&&(me=$e===Gt?i.SRGB8_ALPHA8:i.RGBA8),ne===i.UNSIGNED_SHORT_4_4_4_4&&(me=i.RGBA4),ne===i.UNSIGNED_SHORT_5_5_5_1&&(me=i.RGB5_A1)}return(me===i.R16F||me===i.R32F||me===i.RG16F||me===i.RG32F||me===i.RGBA16F||me===i.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function F(k,R){let ne;return k?R===null||R===Cr||R===ca?ne=i.DEPTH24_STENCIL8:R===Ei?ne=i.DEPTH32F_STENCIL8:R===la&&(ne=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Cr||R===ca?ne=i.DEPTH_COMPONENT24:R===Ei?ne=i.DEPTH_COMPONENT32F:R===la&&(ne=i.DEPTH_COMPONENT16),ne}function V(k,R){return x(k)===!0||k.isFramebufferTexture&&k.minFilter!==Pn&&k.minFilter!==wi?Math.log2(Math.max(R.width,R.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?R.mipmaps.length:1}function S(k){const R=k.target;R.removeEventListener("dispose",S),Y(R),R.isVideoTexture&&m.delete(R)}function G(k){const R=k.target;R.removeEventListener("dispose",G),A(R)}function Y(k){const R=n.get(k);if(R.__webglInit===void 0)return;const ne=k.source,fe=g.get(ne);if(fe){const we=fe[R.__cacheKey];we.usedTimes--,we.usedTimes===0&&N(k),Object.keys(fe).length===0&&g.delete(ne)}n.remove(k)}function N(k){const R=n.get(k);i.deleteTexture(R.__webglTexture);const ne=k.source,fe=g.get(ne);delete fe[R.__cacheKey],l.memory.textures--}function A(k){const R=n.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),n.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(R.__webglFramebuffer[fe]))for(let we=0;we<R.__webglFramebuffer[fe].length;we++)i.deleteFramebuffer(R.__webglFramebuffer[fe][we]);else i.deleteFramebuffer(R.__webglFramebuffer[fe]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[fe])}else{if(Array.isArray(R.__webglFramebuffer))for(let fe=0;fe<R.__webglFramebuffer.length;fe++)i.deleteFramebuffer(R.__webglFramebuffer[fe]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let fe=0;fe<R.__webglColorRenderbuffer.length;fe++)R.__webglColorRenderbuffer[fe]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[fe]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const ne=k.textures;for(let fe=0,we=ne.length;fe<we;fe++){const me=n.get(ne[fe]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),l.memory.textures--),n.remove(ne[fe])}n.remove(k)}let O=0;function K(){O=0}function oe(){const k=O;return k>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+r.maxTextures),O+=1,k}function Z(k){const R=[];return R.push(k.wrapS),R.push(k.wrapT),R.push(k.wrapR||0),R.push(k.magFilter),R.push(k.minFilter),R.push(k.anisotropy),R.push(k.internalFormat),R.push(k.format),R.push(k.type),R.push(k.generateMipmaps),R.push(k.premultiplyAlpha),R.push(k.flipY),R.push(k.unpackAlignment),R.push(k.colorSpace),R.join()}function $(k,R){const ne=n.get(k);if(k.isVideoTexture&&ot(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&ne.__version!==k.version){const fe=k.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(ne,k,R);return}}else k.isExternalTexture&&(ne.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture,i.TEXTURE0+R)}function ee(k,R){const ne=n.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&ne.__version!==k.version){de(ne,k,R);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ne.__webglTexture,i.TEXTURE0+R)}function pe(k,R){const ne=n.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&ne.__version!==k.version){de(ne,k,R);return}t.bindTexture(i.TEXTURE_3D,ne.__webglTexture,i.TEXTURE0+R)}function se(k,R){const ne=n.get(k);if(k.version>0&&ne.__version!==k.version){ye(ne,k,R);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture,i.TEXTURE0+R)}const Ee={[Rc]:i.REPEAT,[Tr]:i.CLAMP_TO_EDGE,[Cc]:i.MIRRORED_REPEAT},De={[Pn]:i.NEAREST,[py]:i.NEAREST_MIPMAP_NEAREST,[ka]:i.NEAREST_MIPMAP_LINEAR,[wi]:i.LINEAR,[Rl]:i.LINEAR_MIPMAP_NEAREST,[Ar]:i.LINEAR_MIPMAP_LINEAR},je={[_y]:i.NEVER,[by]:i.ALWAYS,[vy]:i.LESS,[cp]:i.LEQUAL,[yy]:i.EQUAL,[Ey]:i.GEQUAL,[xy]:i.GREATER,[wy]:i.NOTEQUAL};function at(k,R){if(R.type===Ei&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===wi||R.magFilter===Rl||R.magFilter===ka||R.magFilter===Ar||R.minFilter===wi||R.minFilter===Rl||R.minFilter===ka||R.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(k,i.TEXTURE_WRAP_S,Ee[R.wrapS]),i.texParameteri(k,i.TEXTURE_WRAP_T,Ee[R.wrapT]),(k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY)&&i.texParameteri(k,i.TEXTURE_WRAP_R,Ee[R.wrapR]),i.texParameteri(k,i.TEXTURE_MAG_FILTER,De[R.magFilter]),i.texParameteri(k,i.TEXTURE_MIN_FILTER,De[R.minFilter]),R.compareFunction&&(i.texParameteri(k,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(k,i.TEXTURE_COMPARE_FUNC,je[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Pn||R.minFilter!==ka&&R.minFilter!==Ar||R.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");i.texParameterf(k,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function Et(k,R){let ne=!1;k.__webglInit===void 0&&(k.__webglInit=!0,R.addEventListener("dispose",S));const fe=R.source;let we=g.get(fe);we===void 0&&(we={},g.set(fe,we));const me=Z(R);if(me!==k.__cacheKey){we[me]===void 0&&(we[me]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,ne=!0),we[me].usedTimes++;const $e=we[k.__cacheKey];$e!==void 0&&(we[k.__cacheKey].usedTimes--,$e.usedTimes===0&&N(R)),k.__cacheKey=me,k.__webglTexture=we[me].texture}return ne}function lt(k,R,ne){return Math.floor(Math.floor(k/ne)/R)}function Qe(k,R,ne,fe){const me=k.updateRanges;if(me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,R.width,R.height,ne,fe,R.data);else{me.sort((Re,Oe)=>Re.start-Oe.start);let $e=0;for(let Re=1;Re<me.length;Re++){const Oe=me[$e],tt=me[Re],Ye=Oe.start+Oe.count,Ue=lt(tt.start,R.width,4),ut=lt(Oe.start,R.width,4);tt.start<=Ye+1&&Ue===ut&&lt(tt.start+tt.count-1,R.width,4)===Ue?Oe.count=Math.max(Oe.count,tt.start+tt.count-Oe.start):(++$e,me[$e]=tt)}me.length=$e+1;const Ie=i.getParameter(i.UNPACK_ROW_LENGTH),Xe=i.getParameter(i.UNPACK_SKIP_PIXELS),qe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,R.width);for(let Re=0,Oe=me.length;Re<Oe;Re++){const tt=me[Re],Ye=Math.floor(tt.start/4),Ue=Math.ceil(tt.count/4),ut=Ye%R.width,X=Math.floor(Ye/R.width),Pe=Ue,Fe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),i.pixelStorei(i.UNPACK_SKIP_ROWS,X),t.texSubImage2D(i.TEXTURE_2D,0,ut,X,Pe,Fe,ne,fe,R.data)}k.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Ie),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,qe)}}function de(k,R,ne){let fe=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(fe=i.TEXTURE_3D);const we=Et(k,R),me=R.source;t.bindTexture(fe,k.__webglTexture,i.TEXTURE0+ne);const $e=n.get(me);if(me.version!==$e.__version||we===!0){t.activeTexture(i.TEXTURE0+ne);const Ie=kt.getPrimaries(kt.workingColorSpace),Xe=R.colorSpace===Zi?null:kt.getPrimaries(R.colorSpace),qe=R.colorSpace===Zi||Ie===Xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let Re=T(R.image,!1,r.maxTextureSize);Re=Ht(R,Re);const Oe=a.convert(R.format,R.colorSpace),tt=a.convert(R.type);let Ye=I(R.internalFormat,Oe,tt,R.colorSpace,R.isVideoTexture);at(fe,R);let Ue;const ut=R.mipmaps,X=R.isVideoTexture!==!0,Pe=$e.__version===void 0||we===!0,Fe=me.dataReady,Be=V(R,Re);if(R.isDepthTexture)Ye=F(R.format===ha,R.type),Pe&&(X?t.texStorage2D(i.TEXTURE_2D,1,Ye,Re.width,Re.height):t.texImage2D(i.TEXTURE_2D,0,Ye,Re.width,Re.height,0,Oe,tt,null));else if(R.isDataTexture)if(ut.length>0){X&&Pe&&t.texStorage2D(i.TEXTURE_2D,Be,Ye,ut[0].width,ut[0].height);for(let J=0,j=ut.length;J<j;J++)Ue=ut[J],X?Fe&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Ue.width,Ue.height,Oe,tt,Ue.data):t.texImage2D(i.TEXTURE_2D,J,Ye,Ue.width,Ue.height,0,Oe,tt,Ue.data);R.generateMipmaps=!1}else X?(Pe&&t.texStorage2D(i.TEXTURE_2D,Be,Ye,Re.width,Re.height),Fe&&Qe(R,Re,Oe,tt)):t.texImage2D(i.TEXTURE_2D,0,Ye,Re.width,Re.height,0,Oe,tt,Re.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){X&&Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,Ye,ut[0].width,ut[0].height,Re.depth);for(let J=0,j=ut.length;J<j;J++)if(Ue=ut[J],R.format!==ei)if(Oe!==null)if(X){if(Fe)if(R.layerUpdates.size>0){const ze=Sf(Ue.width,Ue.height,R.format,R.type);for(const st of R.layerUpdates){const Dt=Ue.data.subarray(st*ze/Ue.data.BYTES_PER_ELEMENT,(st+1)*ze/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,st,Ue.width,Ue.height,1,Oe,Dt)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Ue.width,Ue.height,Re.depth,Oe,Ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Ye,Ue.width,Ue.height,Re.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Fe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Ue.width,Ue.height,Re.depth,Oe,tt,Ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,Ye,Ue.width,Ue.height,Re.depth,0,Oe,tt,Ue.data)}else{X&&Pe&&t.texStorage2D(i.TEXTURE_2D,Be,Ye,ut[0].width,ut[0].height);for(let J=0,j=ut.length;J<j;J++)Ue=ut[J],R.format!==ei?Oe!==null?X?Fe&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,Ue.width,Ue.height,Oe,Ue.data):t.compressedTexImage2D(i.TEXTURE_2D,J,Ye,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Fe&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Ue.width,Ue.height,Oe,tt,Ue.data):t.texImage2D(i.TEXTURE_2D,J,Ye,Ue.width,Ue.height,0,Oe,tt,Ue.data)}else if(R.isDataArrayTexture)if(X){if(Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,Ye,Re.width,Re.height,Re.depth),Fe)if(R.layerUpdates.size>0){const J=Sf(Re.width,Re.height,R.format,R.type);for(const j of R.layerUpdates){const ze=Re.data.subarray(j*J/Re.data.BYTES_PER_ELEMENT,(j+1)*J/Re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,Re.width,Re.height,1,Oe,tt,ze)}R.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Re.width,Re.height,Re.depth,Oe,tt,Re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ye,Re.width,Re.height,Re.depth,0,Oe,tt,Re.data);else if(R.isData3DTexture)X?(Pe&&t.texStorage3D(i.TEXTURE_3D,Be,Ye,Re.width,Re.height,Re.depth),Fe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Re.width,Re.height,Re.depth,Oe,tt,Re.data)):t.texImage3D(i.TEXTURE_3D,0,Ye,Re.width,Re.height,Re.depth,0,Oe,tt,Re.data);else if(R.isFramebufferTexture){if(Pe)if(X)t.texStorage2D(i.TEXTURE_2D,Be,Ye,Re.width,Re.height);else{let J=Re.width,j=Re.height;for(let ze=0;ze<Be;ze++)t.texImage2D(i.TEXTURE_2D,ze,Ye,J,j,0,Oe,tt,null),J>>=1,j>>=1}}else if(ut.length>0){if(X&&Pe){const J=St(ut[0]);t.texStorage2D(i.TEXTURE_2D,Be,Ye,J.width,J.height)}for(let J=0,j=ut.length;J<j;J++)Ue=ut[J],X?Fe&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Oe,tt,Ue):t.texImage2D(i.TEXTURE_2D,J,Ye,Oe,tt,Ue);R.generateMipmaps=!1}else if(X){if(Pe){const J=St(Re);t.texStorage2D(i.TEXTURE_2D,Be,Ye,J.width,J.height)}Fe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Oe,tt,Re)}else t.texImage2D(i.TEXTURE_2D,0,Ye,Oe,tt,Re);x(R)&&_(fe),$e.__version=me.version,R.onUpdate&&R.onUpdate(R)}k.__version=R.version}function ye(k,R,ne){if(R.image.length!==6)return;const fe=Et(k,R),we=R.source;t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+ne);const me=n.get(we);if(we.version!==me.__version||fe===!0){t.activeTexture(i.TEXTURE0+ne);const $e=kt.getPrimaries(kt.workingColorSpace),Ie=R.colorSpace===Zi?null:kt.getPrimaries(R.colorSpace),Xe=R.colorSpace===Zi||$e===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const qe=R.isCompressedTexture||R.image[0].isCompressedTexture,Re=R.image[0]&&R.image[0].isDataTexture,Oe=[];for(let j=0;j<6;j++)!qe&&!Re?Oe[j]=T(R.image[j],!0,r.maxCubemapSize):Oe[j]=Re?R.image[j].image:R.image[j],Oe[j]=Ht(R,Oe[j]);const tt=Oe[0],Ye=a.convert(R.format,R.colorSpace),Ue=a.convert(R.type),ut=I(R.internalFormat,Ye,Ue,R.colorSpace),X=R.isVideoTexture!==!0,Pe=me.__version===void 0||fe===!0,Fe=we.dataReady;let Be=V(R,tt);at(i.TEXTURE_CUBE_MAP,R);let J;if(qe){X&&Pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,ut,tt.width,tt.height);for(let j=0;j<6;j++){J=Oe[j].mipmaps;for(let ze=0;ze<J.length;ze++){const st=J[ze];R.format!==ei?Ye!==null?X?Fe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ze,0,0,st.width,st.height,Ye,st.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ze,ut,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ze,0,0,st.width,st.height,Ye,Ue,st.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ze,ut,st.width,st.height,0,Ye,Ue,st.data)}}}else{if(J=R.mipmaps,X&&Pe){J.length>0&&Be++;const j=St(Oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,ut,j.width,j.height)}for(let j=0;j<6;j++)if(Re){X?Fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Oe[j].width,Oe[j].height,Ye,Ue,Oe[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ut,Oe[j].width,Oe[j].height,0,Ye,Ue,Oe[j].data);for(let ze=0;ze<J.length;ze++){const Dt=J[ze].image[j].image;X?Fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ze+1,0,0,Dt.width,Dt.height,Ye,Ue,Dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ze+1,ut,Dt.width,Dt.height,0,Ye,Ue,Dt.data)}}else{X?Fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ye,Ue,Oe[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ut,Ye,Ue,Oe[j]);for(let ze=0;ze<J.length;ze++){const st=J[ze];X?Fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ze+1,0,0,Ye,Ue,st.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ze+1,ut,Ye,Ue,st.image[j])}}}x(R)&&_(i.TEXTURE_CUBE_MAP),me.__version=we.version,R.onUpdate&&R.onUpdate(R)}k.__version=R.version}function ue(k,R,ne,fe,we,me){const $e=a.convert(ne.format,ne.colorSpace),Ie=a.convert(ne.type),Xe=I(ne.internalFormat,$e,Ie,ne.colorSpace),qe=n.get(R),Re=n.get(ne);if(Re.__renderTarget=R,!qe.__hasExternalTextures){const Oe=Math.max(1,R.width>>me),tt=Math.max(1,R.height>>me);we===i.TEXTURE_3D||we===i.TEXTURE_2D_ARRAY?t.texImage3D(we,me,Xe,Oe,tt,R.depth,0,$e,Ie,null):t.texImage2D(we,me,Xe,Oe,tt,0,$e,Ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,k),He(R)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,we,Re.__webglTexture,0,zt(R)):(we===i.TEXTURE_2D||we>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&we<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,we,Re.__webglTexture,me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(k,R,ne){if(i.bindRenderbuffer(i.RENDERBUFFER,k),R.depthBuffer){const fe=R.depthTexture,we=fe&&fe.isDepthTexture?fe.type:null,me=F(R.stencilBuffer,we),$e=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=zt(R);He(R)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,me,R.width,R.height):ne?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,me,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,me,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,$e,i.RENDERBUFFER,k)}else{const fe=R.textures;for(let we=0;we<fe.length;we++){const me=fe[we],$e=a.convert(me.format,me.colorSpace),Ie=a.convert(me.type),Xe=I(me.internalFormat,$e,Ie,me.colorSpace),qe=zt(R);ne&&He(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,Xe,R.width,R.height):He(R)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe,Xe,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,Xe,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(k,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,k),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=n.get(R.depthTexture);fe.__renderTarget=R,(!fe.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),$(R.depthTexture,0);const we=fe.__webglTexture,me=zt(R);if(R.depthTexture.format===ua)He(R)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,we,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,we,0);else if(R.depthTexture.format===ha)He(R)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,we,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,we,0);else throw new Error("Unknown depthTexture format")}function dt(k){const R=n.get(k),ne=k.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==k.depthTexture){const fe=k.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),fe){const we=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,fe.removeEventListener("dispose",we)};fe.addEventListener("dispose",we),R.__depthDisposeCallback=we}R.__boundDepthTexture=fe}if(k.depthTexture&&!R.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");const fe=k.texture.mipmaps;fe&&fe.length>0?Ae(R.__webglFramebuffer[0],k):Ae(R.__webglFramebuffer,k)}else if(ne){R.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[fe]),R.__webglDepthbuffer[fe]===void 0)R.__webglDepthbuffer[fe]=i.createRenderbuffer(),_e(R.__webglDepthbuffer[fe],k,!1);else{const we=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=R.__webglDepthbuffer[fe];i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,me)}}else{const fe=k.texture.mipmaps;if(fe&&fe.length>0?t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),_e(R.__webglDepthbuffer,k,!1);else{const we=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,me)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(k,R,ne){const fe=n.get(k);R!==void 0&&ue(fe.__webglFramebuffer,k,k.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ne!==void 0&&dt(k)}function W(k){const R=k.texture,ne=n.get(k),fe=n.get(R);k.addEventListener("dispose",G);const we=k.textures,me=k.isWebGLCubeRenderTarget===!0,$e=we.length>1;if($e||(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=R.version,l.memory.textures++),me){ne.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(R.mipmaps&&R.mipmaps.length>0){ne.__webglFramebuffer[Ie]=[];for(let Xe=0;Xe<R.mipmaps.length;Xe++)ne.__webglFramebuffer[Ie][Xe]=i.createFramebuffer()}else ne.__webglFramebuffer[Ie]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Ie=0;Ie<R.mipmaps.length;Ie++)ne.__webglFramebuffer[Ie]=i.createFramebuffer()}else ne.__webglFramebuffer=i.createFramebuffer();if($e)for(let Ie=0,Xe=we.length;Ie<Xe;Ie++){const qe=n.get(we[Ie]);qe.__webglTexture===void 0&&(qe.__webglTexture=i.createTexture(),l.memory.textures++)}if(k.samples>0&&He(k)===!1){ne.__webglMultisampledFramebuffer=i.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Ie=0;Ie<we.length;Ie++){const Xe=we[Ie];ne.__webglColorRenderbuffer[Ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ne.__webglColorRenderbuffer[Ie]);const qe=a.convert(Xe.format,Xe.colorSpace),Re=a.convert(Xe.type),Oe=I(Xe.internalFormat,qe,Re,Xe.colorSpace,k.isXRRenderTarget===!0),tt=zt(k);i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,Oe,k.width,k.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,ne.__webglColorRenderbuffer[Ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),k.depthBuffer&&(ne.__webglDepthRenderbuffer=i.createRenderbuffer(),_e(ne.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(me){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),at(i.TEXTURE_CUBE_MAP,R);for(let Ie=0;Ie<6;Ie++)if(R.mipmaps&&R.mipmaps.length>0)for(let Xe=0;Xe<R.mipmaps.length;Xe++)ue(ne.__webglFramebuffer[Ie][Xe],k,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Xe);else ue(ne.__webglFramebuffer[Ie],k,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);x(R)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let Ie=0,Xe=we.length;Ie<Xe;Ie++){const qe=we[Ie],Re=n.get(qe);let Oe=i.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Oe=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Oe,Re.__webglTexture),at(Oe,qe),ue(ne.__webglFramebuffer,k,qe,i.COLOR_ATTACHMENT0+Ie,Oe,0),x(qe)&&_(Oe)}t.unbindTexture()}else{let Ie=i.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Ie=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ie,fe.__webglTexture),at(Ie,R),R.mipmaps&&R.mipmaps.length>0)for(let Xe=0;Xe<R.mipmaps.length;Xe++)ue(ne.__webglFramebuffer[Xe],k,R,i.COLOR_ATTACHMENT0,Ie,Xe);else ue(ne.__webglFramebuffer,k,R,i.COLOR_ATTACHMENT0,Ie,0);x(R)&&_(Ie),t.unbindTexture()}k.depthBuffer&&dt(k)}function bt(k){const R=k.textures;for(let ne=0,fe=R.length;ne<fe;ne++){const we=R[ne];if(x(we)){const me=U(k),$e=n.get(we).__webglTexture;t.bindTexture(me,$e),_(me),t.unbindTexture()}}}const rt=[],et=[];function Ge(k){if(k.samples>0){if(He(k)===!1){const R=k.textures,ne=k.width,fe=k.height;let we=i.COLOR_BUFFER_BIT;const me=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$e=n.get(k),Ie=R.length>1;if(Ie)for(let qe=0;qe<R.length;qe++)t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const Xe=k.texture.mipmaps;Xe&&Xe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let qe=0;qe<R.length;qe++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(we|=i.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(we|=i.STENCIL_BUFFER_BIT)),Ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,$e.__webglColorRenderbuffer[qe]);const Re=n.get(R[qe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Re,0)}i.blitFramebuffer(0,0,ne,fe,0,0,ne,fe,we,i.NEAREST),f===!0&&(rt.length=0,et.length=0,rt.push(i.COLOR_ATTACHMENT0+qe),k.depthBuffer&&k.resolveDepthBuffer===!1&&(rt.push(me),et.push(me),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,et)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ie)for(let qe=0;qe<R.length;qe++){t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.RENDERBUFFER,$e.__webglColorRenderbuffer[qe]);const Re=n.get(R[qe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.TEXTURE_2D,Re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&f){const R=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function zt(k){return Math.min(r.maxSamples,k.samples)}function He(k){const R=n.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function ot(k){const R=l.render.frame;m.get(k)!==R&&(m.set(k,R),k.update())}function Ht(k,R){const ne=k.colorSpace,fe=k.format,we=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||ne!==Ms&&ne!==Zi&&(kt.getTransfer(ne)===Gt?(fe!==ei||we!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),R}function St(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(h.width=k.naturalWidth||k.width,h.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(h.width=k.displayWidth,h.height=k.displayHeight):(h.width=k.width,h.height=k.height),h}this.allocateTextureUnit=oe,this.resetTextureUnits=K,this.setTexture2D=$,this.setTexture2DArray=ee,this.setTexture3D=pe,this.setTextureCube=se,this.rebindTextures=Nt,this.setupRenderTarget=W,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=He}function $S(i,e){function t(n,r=Zi){let a;const l=kt.getTransfer(r);if(n===hi)return i.UNSIGNED_BYTE;if(n===Cu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ip)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rp)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===tp)return i.BYTE;if(n===np)return i.SHORT;if(n===la)return i.UNSIGNED_SHORT;if(n===Ru)return i.INT;if(n===Cr)return i.UNSIGNED_INT;if(n===Ei)return i.FLOAT;if(n===da)return i.HALF_FLOAT;if(n===sp)return i.ALPHA;if(n===ap)return i.RGB;if(n===ei)return i.RGBA;if(n===ua)return i.DEPTH_COMPONENT;if(n===ha)return i.DEPTH_STENCIL;if(n===Du)return i.RED;if(n===Lu)return i.RED_INTEGER;if(n===op)return i.RG;if(n===Iu)return i.RG_INTEGER;if(n===Fu)return i.RGBA_INTEGER;if(n===mo||n===go||n===_o||n===vo)if(l===Gt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===mo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===go)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===mo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===go)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_o)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pc||n===Dc||n===Lc||n===Ic)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Pc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ic)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fc||n===Uc||n===Nc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Fc||n===Uc)return l===Gt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Nc)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Oc||n===kc||n===Bc||n===zc||n===Hc||n===Vc||n===Gc||n===Wc||n===$c||n===jc||n===Xc||n===qc||n===Yc||n===Kc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Oc)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kc)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bc)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zc)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hc)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vc)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gc)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wc)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$c)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jc)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xc)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qc)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yc)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Kc)return l===Gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zc||n===Jc||n===Qc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Zc)return l===Gt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===eu||n===tu||n===nu||n===iu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===eu)return a.COMPRESSED_RED_RGTC1_EXT;if(n===tu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===iu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ca?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const jS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ep(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new nr({vertexShader:jS,fragmentShader:XS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new an(new ma(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YS extends Dr{constructor(e,t){super();const n=this;let r=null,a=1,l=null,c="local-floor",f=1,h=null,m=null,p=null,g=null,v=null,b=null;const T=typeof XRWebGLBinding<"u",x=new qS,_={},U=t.getContextAttributes();let I=null,F=null;const V=[],S=[],G=new ct;let Y=null;const N=new Nn;N.viewport=new $t;const A=new Nn;A.viewport=new $t;const O=[N,A],K=new mx;let oe=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(de){let ye=V[de];return ye===void 0&&(ye=new Kl,V[de]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(de){let ye=V[de];return ye===void 0&&(ye=new Kl,V[de]=ye),ye.getGripSpace()},this.getHand=function(de){let ye=V[de];return ye===void 0&&(ye=new Kl,V[de]=ye),ye.getHandSpace()};function $(de){const ye=S.indexOf(de.inputSource);if(ye===-1)return;const ue=V[ye];ue!==void 0&&(ue.update(de.inputSource,de.frame,h||l),ue.dispatchEvent({type:de.type,data:de.inputSource}))}function ee(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",pe);for(let de=0;de<V.length;de++){const ye=S[de];ye!==null&&(S[de]=null,V[de].disconnect(ye))}oe=null,Z=null,x.reset();for(const de in _)delete _[de];e.setRenderTarget(I),v=null,g=null,p=null,r=null,F=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(Y),e.setSize(G.width,G.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(de){a=de,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(de){c=de,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(de){h=de},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return p===null&&T&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return b},this.getSession=function(){return r},this.setSession=async function(de){if(r=de,r!==null){if(I=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",pe),U.xrCompatible!==!0&&await t.makeXRCompatible(),Y=e.getPixelRatio(),e.getSize(G),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,_e=null,Ae=null;U.depth&&(Ae=U.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=U.stencil?ha:ua,_e=U.stencil?ca:Cr);const dt={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:a};p=this.getBinding(),g=p.createProjectionLayer(dt),r.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),F=new tr(g.textureWidth,g.textureHeight,{format:ei,type:hi,depthTexture:new wp(g.textureWidth,g.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ue={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),F=new tr(v.framebufferWidth,v.framebufferHeight,{format:ei,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(f),h=null,l=await r.requestReferenceSpace(c),Qe.setContext(r),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function pe(de){for(let ye=0;ye<de.removed.length;ye++){const ue=de.removed[ye],_e=S.indexOf(ue);_e>=0&&(S[_e]=null,V[_e].disconnect(ue))}for(let ye=0;ye<de.added.length;ye++){const ue=de.added[ye];let _e=S.indexOf(ue);if(_e===-1){for(let dt=0;dt<V.length;dt++)if(dt>=S.length){S.push(ue),_e=dt;break}else if(S[dt]===null){S[dt]=ue,_e=dt;break}if(_e===-1)break}const Ae=V[_e];Ae&&Ae.connect(ue)}}const se=new Q,Ee=new Q;function De(de,ye,ue){se.setFromMatrixPosition(ye.matrixWorld),Ee.setFromMatrixPosition(ue.matrixWorld);const _e=se.distanceTo(Ee),Ae=ye.projectionMatrix.elements,dt=ue.projectionMatrix.elements,Nt=Ae[14]/(Ae[10]-1),W=Ae[14]/(Ae[10]+1),bt=(Ae[9]+1)/Ae[5],rt=(Ae[9]-1)/Ae[5],et=(Ae[8]-1)/Ae[0],Ge=(dt[8]+1)/dt[0],zt=Nt*et,He=Nt*Ge,ot=_e/(-et+Ge),Ht=ot*-et;if(ye.matrixWorld.decompose(de.position,de.quaternion,de.scale),de.translateX(Ht),de.translateZ(ot),de.matrixWorld.compose(de.position,de.quaternion,de.scale),de.matrixWorldInverse.copy(de.matrixWorld).invert(),Ae[10]===-1)de.projectionMatrix.copy(ye.projectionMatrix),de.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const St=Nt+ot,k=W+ot,R=zt-Ht,ne=He+(_e-Ht),fe=bt*W/k*St,we=rt*W/k*St;de.projectionMatrix.makePerspective(R,ne,fe,we,St,k),de.projectionMatrixInverse.copy(de.projectionMatrix).invert()}}function je(de,ye){ye===null?de.matrixWorld.copy(de.matrix):de.matrixWorld.multiplyMatrices(ye.matrixWorld,de.matrix),de.matrixWorldInverse.copy(de.matrixWorld).invert()}this.updateCamera=function(de){if(r===null)return;let ye=de.near,ue=de.far;x.texture!==null&&(x.depthNear>0&&(ye=x.depthNear),x.depthFar>0&&(ue=x.depthFar)),K.near=A.near=N.near=ye,K.far=A.far=N.far=ue,(oe!==K.near||Z!==K.far)&&(r.updateRenderState({depthNear:K.near,depthFar:K.far}),oe=K.near,Z=K.far),K.layers.mask=de.layers.mask|6,N.layers.mask=K.layers.mask&3,A.layers.mask=K.layers.mask&5;const _e=de.parent,Ae=K.cameras;je(K,_e);for(let dt=0;dt<Ae.length;dt++)je(Ae[dt],_e);Ae.length===2?De(K,N,A):K.projectionMatrix.copy(N.projectionMatrix),at(de,K,_e)};function at(de,ye,ue){ue===null?de.matrix.copy(ye.matrixWorld):(de.matrix.copy(ue.matrixWorld),de.matrix.invert(),de.matrix.multiply(ye.matrixWorld)),de.matrix.decompose(de.position,de.quaternion,de.scale),de.updateMatrixWorld(!0),de.projectionMatrix.copy(ye.projectionMatrix),de.projectionMatrixInverse.copy(ye.projectionMatrixInverse),de.isPerspectiveCamera&&(de.fov=ru*2*Math.atan(1/de.projectionMatrix.elements[5]),de.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&v===null))return f},this.setFoveation=function(de){f=de,g!==null&&(g.fixedFoveation=de),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=de)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(K)},this.getCameraTexture=function(de){return _[de]};let Et=null;function lt(de,ye){if(m=ye.getViewerPose(h||l),b=ye,m!==null){const ue=m.views;v!==null&&(e.setRenderTargetFramebuffer(F,v.framebuffer),e.setRenderTarget(F));let _e=!1;ue.length!==K.cameras.length&&(K.cameras.length=0,_e=!0);for(let W=0;W<ue.length;W++){const bt=ue[W];let rt=null;if(v!==null)rt=v.getViewport(bt);else{const Ge=p.getViewSubImage(g,bt);rt=Ge.viewport,W===0&&(e.setRenderTargetTextures(F,Ge.colorTexture,Ge.depthStencilTexture),e.setRenderTarget(F))}let et=O[W];et===void 0&&(et=new Nn,et.layers.enable(W),et.viewport=new $t,O[W]=et),et.matrix.fromArray(bt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(bt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(rt.x,rt.y,rt.width,rt.height),W===0&&(K.matrix.copy(et.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),_e===!0&&K.cameras.push(et)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){p=n.getBinding();const W=p.getDepthInformation(ue[0]);W&&W.isValid&&W.texture&&x.init(W,r.renderState)}if(Ae&&Ae.includes("camera-access")&&T){e.state.unbindTexture(),p=n.getBinding();for(let W=0;W<ue.length;W++){const bt=ue[W].camera;if(bt){let rt=_[bt];rt||(rt=new Ep,_[bt]=rt);const et=p.getCameraImage(bt);rt.sourceTexture=et}}}}for(let ue=0;ue<V.length;ue++){const _e=S[ue],Ae=V[ue];_e!==null&&Ae!==void 0&&Ae.update(_e,ye,h||l)}Et&&Et(de,ye),ye.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ye}),b=null}const Qe=new Ap;Qe.setAnimationLoop(lt),this.setAnimationLoop=function(de){Et=de},this.dispose=function(){}}}const wr=new ti,KS=new jt;function ZS(i,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function n(x,_){_.color.getRGB(x.fogColor.value,_p(i)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function r(x,_,U,I,F){_.isMeshBasicMaterial||_.isMeshLambertMaterial?a(x,_):_.isMeshToonMaterial?(a(x,_),p(x,_)):_.isMeshPhongMaterial?(a(x,_),m(x,_)):_.isMeshStandardMaterial?(a(x,_),g(x,_),_.isMeshPhysicalMaterial&&v(x,_,F)):_.isMeshMatcapMaterial?(a(x,_),b(x,_)):_.isMeshDepthMaterial?a(x,_):_.isMeshDistanceMaterial?(a(x,_),T(x,_)):_.isMeshNormalMaterial?a(x,_):_.isLineBasicMaterial?(l(x,_),_.isLineDashedMaterial&&c(x,_)):_.isPointsMaterial?f(x,_,U,I):_.isSpriteMaterial?h(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function a(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Cn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Cn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const U=e.get(_),I=U.envMap,F=U.envMapRotation;I&&(x.envMap.value=I,wr.copy(F),wr.x*=-1,wr.y*=-1,wr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),x.envMapRotation.value.setFromMatrix4(KS.makeRotationFromEuler(wr)),x.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function l(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function c(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function f(x,_,U,I){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*U,x.scale.value=I*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function h(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function m(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function p(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function g(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function v(x,_,U){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Cn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=U.texture,x.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,_){_.matcap&&(x.matcap.value=_.matcap)}function T(x,_){const U=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(U.matrixWorld),x.nearDistance.value=U.shadow.camera.near,x.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function JS(i,e,t,n){let r={},a={},l=[];const c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function f(U,I){const F=I.program;n.uniformBlockBinding(U,F)}function h(U,I){let F=r[U.id];F===void 0&&(b(U),F=m(U),r[U.id]=F,U.addEventListener("dispose",x));const V=I.program;n.updateUBOMapping(U,V);const S=e.render.frame;a[U.id]!==S&&(g(U),a[U.id]=S)}function m(U){const I=p();U.__bindingPointIndex=I;const F=i.createBuffer(),V=U.__size,S=U.usage;return i.bindBuffer(i.UNIFORM_BUFFER,F),i.bufferData(i.UNIFORM_BUFFER,V,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,F),F}function p(){for(let U=0;U<c;U++)if(l.indexOf(U)===-1)return l.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(U){const I=r[U.id],F=U.uniforms,V=U.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let S=0,G=F.length;S<G;S++){const Y=Array.isArray(F[S])?F[S]:[F[S]];for(let N=0,A=Y.length;N<A;N++){const O=Y[N];if(v(O,S,N,V)===!0){const K=O.__offset,oe=Array.isArray(O.value)?O.value:[O.value];let Z=0;for(let $=0;$<oe.length;$++){const ee=oe[$],pe=T(ee);typeof ee=="number"||typeof ee=="boolean"?(O.__data[0]=ee,i.bufferSubData(i.UNIFORM_BUFFER,K+Z,O.__data)):ee.isMatrix3?(O.__data[0]=ee.elements[0],O.__data[1]=ee.elements[1],O.__data[2]=ee.elements[2],O.__data[3]=0,O.__data[4]=ee.elements[3],O.__data[5]=ee.elements[4],O.__data[6]=ee.elements[5],O.__data[7]=0,O.__data[8]=ee.elements[6],O.__data[9]=ee.elements[7],O.__data[10]=ee.elements[8],O.__data[11]=0):(ee.toArray(O.__data,Z),Z+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(U,I,F,V){const S=U.value,G=I+"_"+F;if(V[G]===void 0)return typeof S=="number"||typeof S=="boolean"?V[G]=S:V[G]=S.clone(),!0;{const Y=V[G];if(typeof S=="number"||typeof S=="boolean"){if(Y!==S)return V[G]=S,!0}else if(Y.equals(S)===!1)return Y.copy(S),!0}return!1}function b(U){const I=U.uniforms;let F=0;const V=16;for(let G=0,Y=I.length;G<Y;G++){const N=Array.isArray(I[G])?I[G]:[I[G]];for(let A=0,O=N.length;A<O;A++){const K=N[A],oe=Array.isArray(K.value)?K.value:[K.value];for(let Z=0,$=oe.length;Z<$;Z++){const ee=oe[Z],pe=T(ee),se=F%V,Ee=se%pe.boundary,De=se+Ee;F+=Ee,De!==0&&V-De<pe.storage&&(F+=V-De),K.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=F,F+=pe.storage}}}const S=F%V;return S>0&&(F+=V-S),U.__size=F,U.__cache={},this}function T(U){const I={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(I.boundary=4,I.storage=4):U.isVector2?(I.boundary=8,I.storage=8):U.isVector3||U.isColor?(I.boundary=16,I.storage=12):U.isVector4?(I.boundary=16,I.storage=16):U.isMatrix3?(I.boundary=48,I.storage=48):U.isMatrix4?(I.boundary=64,I.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),I}function x(U){const I=U.target;I.removeEventListener("dispose",x);const F=l.indexOf(I.__bindingPointIndex);l.splice(F,1),i.deleteBuffer(r[I.id]),delete r[I.id],delete a[I.id]}function _(){for(const U in r)i.deleteBuffer(r[U]);l=[],r={},a={}}return{bind:f,update:h,dispose:_}}class QS{constructor(e={}){const{canvas:t=Ty(),context:n=null,depth:r=!0,stencil:a=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=l;const b=new Uint32Array(4),T=new Int32Array(4);let x=null,_=null;const U=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let V=!1;this._outputColorSpace=Rn;let S=0,G=0,Y=null,N=-1,A=null;const O=new $t,K=new $t;let oe=null;const Z=new ft(0);let $=0,ee=t.width,pe=t.height,se=1,Ee=null,De=null;const je=new $t(0,0,ee,pe),at=new $t(0,0,ee,pe);let Et=!1;const lt=new Ou;let Qe=!1,de=!1;const ye=new jt,ue=new Q,_e=new $t,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Nt(){return Y===null?se:1}let W=n;function bt(L,te){return t.getContext(L,te)}try{const L={alpha:!0,depth:r,stencil:a,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Au}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",J,!1),W===null){const te="webgl2";if(W=bt(te,L),W===null)throw bt(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let rt,et,Ge,zt,He,ot,Ht,St,k,R,ne,fe,we,me,$e,Ie,Xe,qe,Re,Oe,tt,Ye,Ue,ut;function X(){rt=new cb(W),rt.init(),Ye=new $S(W,rt),et=new nb(W,rt,e,Ye),Ge=new GS(W,rt),et.reversedDepthBuffer&&g&&Ge.buffers.depth.setReversed(!0),zt=new fb(W),He=new PS,ot=new WS(W,rt,Ge,He,et,Ye,zt),Ht=new rb(F),St=new lb(F),k=new vx(W),Ue=new eb(W,k),R=new ub(W,k,zt,Ue),ne=new pb(W,R,k,zt),Re=new db(W,et,ot),Ie=new ib(He),fe=new CS(F,Ht,St,rt,et,Ue,Ie),we=new ZS(F,He),me=new LS,$e=new kS(rt),qe=new QE(F,Ht,St,Ge,ne,v,f),Xe=new HS(F,ne,et),ut=new JS(W,zt,et,Ge),Oe=new tb(W,rt,zt),tt=new hb(W,rt,zt),zt.programs=fe.programs,F.capabilities=et,F.extensions=rt,F.properties=He,F.renderLists=me,F.shadowMap=Xe,F.state=Ge,F.info=zt}X();const Pe=new YS(F,W);this.xr=Pe,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const L=rt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=rt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(L){L!==void 0&&(se=L,this.setSize(ee,pe,!1))},this.getSize=function(L){return L.set(ee,pe)},this.setSize=function(L,te,he=!0){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=L,pe=te,t.width=Math.floor(L*se),t.height=Math.floor(te*se),he===!0&&(t.style.width=L+"px",t.style.height=te+"px"),this.setViewport(0,0,L,te)},this.getDrawingBufferSize=function(L){return L.set(ee*se,pe*se).floor()},this.setDrawingBufferSize=function(L,te,he){ee=L,pe=te,se=he,t.width=Math.floor(L*he),t.height=Math.floor(te*he),this.setViewport(0,0,L,te)},this.getCurrentViewport=function(L){return L.copy(O)},this.getViewport=function(L){return L.copy(je)},this.setViewport=function(L,te,he,ce){L.isVector4?je.set(L.x,L.y,L.z,L.w):je.set(L,te,he,ce),Ge.viewport(O.copy(je).multiplyScalar(se).round())},this.getScissor=function(L){return L.copy(at)},this.setScissor=function(L,te,he,ce){L.isVector4?at.set(L.x,L.y,L.z,L.w):at.set(L,te,he,ce),Ge.scissor(K.copy(at).multiplyScalar(se).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(L){Ge.setScissorTest(Et=L)},this.setOpaqueSort=function(L){Ee=L},this.setTransparentSort=function(L){De=L},this.getClearColor=function(L){return L.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(L=!0,te=!0,he=!0){let ce=0;if(L){let ie=!1;if(Y!==null){const Se=Y.texture.format;ie=Se===Fu||Se===Iu||Se===Lu}if(ie){const Se=Y.texture.type,Ne=Se===hi||Se===Cr||Se===la||Se===ca||Se===Cu||Se===Pu,We=qe.getClearColor(),Ve=qe.getClearAlpha(),Ke=We.r,nt=We.g,Me=We.b;Ne?(b[0]=Ke,b[1]=nt,b[2]=Me,b[3]=Ve,W.clearBufferuiv(W.COLOR,0,b)):(T[0]=Ke,T[1]=nt,T[2]=Me,T[3]=Ve,W.clearBufferiv(W.COLOR,0,T))}else ce|=W.COLOR_BUFFER_BIT}te&&(ce|=W.DEPTH_BUFFER_BIT),he&&(ce|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",J,!1),qe.dispose(),me.dispose(),$e.dispose(),He.dispose(),Ht.dispose(),St.dispose(),ne.dispose(),Ue.dispose(),ut.dispose(),fe.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",nn),Pe.removeEventListener("sessionend",di),jn.stop()};function Fe(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Be(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const L=zt.autoReset,te=Xe.enabled,he=Xe.autoUpdate,ce=Xe.needsUpdate,ie=Xe.type;X(),zt.autoReset=L,Xe.enabled=te,Xe.autoUpdate=he,Xe.needsUpdate=ce,Xe.type=ie}function J(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function j(L){const te=L.target;te.removeEventListener("dispose",j),ze(te)}function ze(L){st(L),He.remove(L)}function st(L){const te=He.get(L).programs;te!==void 0&&(te.forEach(function(he){fe.releaseProgram(he)}),L.isShaderMaterial&&fe.releaseShaderCache(L))}this.renderBufferDirect=function(L,te,he,ce,ie,Se){te===null&&(te=Ae);const Ne=ie.isMesh&&ie.matrixWorld.determinant()<0,We=Cs(L,te,he,ce,ie);Ge.setMaterial(ce,Ne);let Ve=he.index,Ke=1;if(ce.wireframe===!0){if(Ve=R.getWireframeAttribute(he),Ve===void 0)return;Ke=2}const nt=he.drawRange,Me=he.attributes.position;let vt=nt.start*Ke,Rt=(nt.start+nt.count)*Ke;Se!==null&&(vt=Math.max(vt,Se.start*Ke),Rt=Math.min(Rt,(Se.start+Se.count)*Ke)),Ve!==null?(vt=Math.max(vt,0),Rt=Math.min(Rt,Ve.count)):Me!=null&&(vt=Math.max(vt,0),Rt=Math.min(Rt,Me.count));const Kt=Rt-vt;if(Kt<0||Kt===1/0)return;Ue.setup(ie,ce,We,he,Ve);let Bt,Ct=Oe;if(Ve!==null&&(Bt=k.get(Ve),Ct=tt,Ct.setIndex(Bt)),ie.isMesh)ce.wireframe===!0?(Ge.setLineWidth(ce.wireframeLinewidth*Nt()),Ct.setMode(W.LINES)):Ct.setMode(W.TRIANGLES);else if(ie.isLine){let Ze=ce.linewidth;Ze===void 0&&(Ze=1),Ge.setLineWidth(Ze*Nt()),ie.isLineSegments?Ct.setMode(W.LINES):ie.isLineLoop?Ct.setMode(W.LINE_LOOP):Ct.setMode(W.LINE_STRIP)}else ie.isPoints?Ct.setMode(W.POINTS):ie.isSprite&&Ct.setMode(W.TRIANGLES);if(ie.isBatchedMesh)if(ie._multiDrawInstances!==null)fa("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount,ie._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))Ct.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const Ze=ie._multiDrawStarts,Xt=ie._multiDrawCounts,Mt=ie._multiDrawCount,hn=Ve?k.get(Ve).bytesPerElement:1,ii=He.get(ce).currentProgram.getUniforms();for(let M=0;M<Mt;M++)ii.setValue(W,"_gl_DrawID",M),Ct.render(Ze[M]/hn,Xt[M])}else if(ie.isInstancedMesh)Ct.renderInstances(vt,Kt,ie.count);else if(he.isInstancedBufferGeometry){const Ze=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Xt=Math.min(he.instanceCount,Ze);Ct.renderInstances(vt,Kt,Xt)}else Ct.render(vt,Kt)};function Dt(L,te,he){L.transparent===!0&&L.side===Ii&&L.forceSinglePass===!1?(L.side=Cn,L.needsUpdate=!0,ni(L,te,he),L.side=Qi,L.needsUpdate=!0,ni(L,te,he),L.side=Ii):ni(L,te,he)}this.compile=function(L,te,he=null){he===null&&(he=L),_=$e.get(he),_.init(te),I.push(_),he.traverseVisible(function(ie){ie.isLight&&ie.layers.test(te.layers)&&(_.pushLight(ie),ie.castShadow&&_.pushShadow(ie))}),L!==he&&L.traverseVisible(function(ie){ie.isLight&&ie.layers.test(te.layers)&&(_.pushLight(ie),ie.castShadow&&_.pushShadow(ie))}),_.setupLights();const ce=new Set;return L.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Se=ie.material;if(Se)if(Array.isArray(Se))for(let Ne=0;Ne<Se.length;Ne++){const We=Se[Ne];Dt(We,he,ie),ce.add(We)}else Dt(Se,he,ie),ce.add(Se)}),_=I.pop(),ce},this.compileAsync=function(L,te,he=null){const ce=this.compile(L,te,he);return new Promise(ie=>{function Se(){if(ce.forEach(function(Ne){He.get(Ne).currentProgram.isReady()&&ce.delete(Ne)}),ce.size===0){ie(L);return}setTimeout(Se,10)}rt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let pt=null;function In(L){pt&&pt(L)}function nn(){jn.stop()}function di(){jn.start()}const jn=new Ap;jn.setAnimationLoop(In),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(L){pt=L,Pe.setAnimationLoop(L),L===null?jn.stop():jn.start()},Pe.addEventListener("sessionstart",nn),Pe.addEventListener("sessionend",di),this.render=function(L,te){if(te!==void 0&&te.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(te),te=Pe.getCamera()),L.isScene===!0&&L.onBeforeRender(F,L,te,Y),_=$e.get(L,I.length),_.init(te),I.push(_),ye.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),lt.setFromProjectionMatrix(ye,bi,te.reversedDepth),de=this.localClippingEnabled,Qe=Ie.init(this.clippingPlanes,de),x=me.get(L,U.length),x.init(),U.push(x),Pe.enabled===!0&&Pe.isPresenting===!0){const Se=F.xr.getDepthSensingMesh();Se!==null&&Ni(Se,te,-1/0,F.sortObjects)}Ni(L,te,0,F.sortObjects),x.finish(),F.sortObjects===!0&&x.sort(Ee,De),dt=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,dt&&qe.addToRenderList(x,L),this.info.render.frame++,Qe===!0&&Ie.beginShadows();const he=_.state.shadowsArray;Xe.render(he,L,te),Qe===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=x.opaque,ie=x.transmissive;if(_.setupLights(),te.isArrayCamera){const Se=te.cameras;if(ie.length>0)for(let Ne=0,We=Se.length;Ne<We;Ne++){const Ve=Se[Ne];ir(ce,ie,L,Ve)}dt&&qe.render(L);for(let Ne=0,We=Se.length;Ne<We;Ne++){const Ve=Se[Ne];Sn(x,L,Ve,Ve.viewport)}}else ie.length>0&&ir(ce,ie,L,te),dt&&qe.render(L),Sn(x,L,te);Y!==null&&G===0&&(ot.updateMultisampleRenderTarget(Y),ot.updateRenderTargetMipmap(Y)),L.isScene===!0&&L.onAfterRender(F,L,te),Ue.resetDefaultState(),N=-1,A=null,I.pop(),I.length>0?(_=I[I.length-1],Qe===!0&&Ie.setGlobalState(F.clippingPlanes,_.state.camera)):_=null,U.pop(),U.length>0?x=U[U.length-1]:x=null};function Ni(L,te,he,ce){if(L.visible===!1)return;if(L.layers.test(te.layers)){if(L.isGroup)he=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(te);else if(L.isLight)_.pushLight(L),L.castShadow&&_.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||lt.intersectsSprite(L)){ce&&_e.setFromMatrixPosition(L.matrixWorld).applyMatrix4(ye);const Ne=ne.update(L),We=L.material;We.visible&&x.push(L,Ne,We,he,_e.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||lt.intersectsObject(L))){const Ne=ne.update(L),We=L.material;if(ce&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),_e.copy(L.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),_e.copy(Ne.boundingSphere.center)),_e.applyMatrix4(L.matrixWorld).applyMatrix4(ye)),Array.isArray(We)){const Ve=Ne.groups;for(let Ke=0,nt=Ve.length;Ke<nt;Ke++){const Me=Ve[Ke],vt=We[Me.materialIndex];vt&&vt.visible&&x.push(L,Ne,vt,he,_e.z,Me)}}else We.visible&&x.push(L,Ne,We,he,_e.z,null)}}const Se=L.children;for(let Ne=0,We=Se.length;Ne<We;Ne++)Ni(Se[Ne],te,he,ce)}function Sn(L,te,he,ce){const ie=L.opaque,Se=L.transmissive,Ne=L.transparent;_.setupLightsView(he),Qe===!0&&Ie.setGlobalState(F.clippingPlanes,he),ce&&Ge.viewport(O.copy(ce)),ie.length>0&&Xn(ie,te,he),Se.length>0&&Xn(Se,te,he),Ne.length>0&&Xn(Ne,te,he),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function ir(L,te,he,ce){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ce.id]===void 0&&(_.state.transmissionRenderTarget[ce.id]=new tr(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?da:hi,minFilter:Ar,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:kt.workingColorSpace}));const Se=_.state.transmissionRenderTarget[ce.id],Ne=ce.viewport||O;Se.setSize(Ne.z*F.transmissionResolutionScale,Ne.w*F.transmissionResolutionScale);const We=F.getRenderTarget(),Ve=F.getActiveCubeFace(),Ke=F.getActiveMipmapLevel();F.setRenderTarget(Se),F.getClearColor(Z),$=F.getClearAlpha(),$<1&&F.setClearColor(16777215,.5),F.clear(),dt&&qe.render(he);const nt=F.toneMapping;F.toneMapping=Ji;const Me=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),_.setupLightsView(ce),Qe===!0&&Ie.setGlobalState(F.clippingPlanes,ce),Xn(L,he,ce),ot.updateMultisampleRenderTarget(Se),ot.updateRenderTargetMipmap(Se),rt.has("WEBGL_multisampled_render_to_texture")===!1){let vt=!1;for(let Rt=0,Kt=te.length;Rt<Kt;Rt++){const Bt=te[Rt],Ct=Bt.object,Ze=Bt.geometry,Xt=Bt.material,Mt=Bt.group;if(Xt.side===Ii&&Ct.layers.test(ce.layers)){const hn=Xt.side;Xt.side=Cn,Xt.needsUpdate=!0,pi(Ct,he,ce,Ze,Xt,Mt),Xt.side=hn,Xt.needsUpdate=!0,vt=!0}}vt===!0&&(ot.updateMultisampleRenderTarget(Se),ot.updateRenderTargetMipmap(Se))}F.setRenderTarget(We,Ve,Ke),F.setClearColor(Z,$),Me!==void 0&&(ce.viewport=Me),F.toneMapping=nt}function Xn(L,te,he){const ce=te.isScene===!0?te.overrideMaterial:null;for(let ie=0,Se=L.length;ie<Se;ie++){const Ne=L[ie],We=Ne.object,Ve=Ne.geometry,Ke=Ne.group;let nt=Ne.material;nt.allowOverride===!0&&ce!==null&&(nt=ce),We.layers.test(he.layers)&&pi(We,te,he,Ve,nt,Ke)}}function pi(L,te,he,ce,ie,Se){L.onBeforeRender(F,te,he,ce,ie,Se),L.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ie.onBeforeRender(F,te,he,ce,L,Se),ie.transparent===!0&&ie.side===Ii&&ie.forceSinglePass===!1?(ie.side=Cn,ie.needsUpdate=!0,F.renderBufferDirect(he,te,ce,ie,L,Se),ie.side=Qi,ie.needsUpdate=!0,F.renderBufferDirect(he,te,ce,ie,L,Se),ie.side=Ii):F.renderBufferDirect(he,te,ce,ie,L,Se),L.onAfterRender(F,te,he,ce,ie,Se)}function ni(L,te,he){te.isScene!==!0&&(te=Ae);const ce=He.get(L),ie=_.state.lights,Se=_.state.shadowsArray,Ne=ie.state.version,We=fe.getParameters(L,ie.state,Se,te,he),Ve=fe.getProgramCacheKey(We);let Ke=ce.programs;ce.environment=L.isMeshStandardMaterial?te.environment:null,ce.fog=te.fog,ce.envMap=(L.isMeshStandardMaterial?St:Ht).get(L.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&L.envMap===null?te.environmentRotation:L.envMapRotation,Ke===void 0&&(L.addEventListener("dispose",j),Ke=new Map,ce.programs=Ke);let nt=Ke.get(Ve);if(nt!==void 0){if(ce.currentProgram===nt&&ce.lightsStateVersion===Ne)return Ur(L,We),nt}else We.uniforms=fe.getUniforms(L),L.onBeforeCompile(We,F),nt=fe.acquireProgram(We,Ve),Ke.set(Ve,nt),ce.uniforms=We.uniforms;const Me=ce.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Me.clippingPlanes=Ie.uniform),Ur(L,We),ce.needsLights=Ps(L),ce.lightsStateVersion=Ne,ce.needsLights&&(Me.ambientLightColor.value=ie.state.ambient,Me.lightProbe.value=ie.state.probe,Me.directionalLights.value=ie.state.directional,Me.directionalLightShadows.value=ie.state.directionalShadow,Me.spotLights.value=ie.state.spot,Me.spotLightShadows.value=ie.state.spotShadow,Me.rectAreaLights.value=ie.state.rectArea,Me.ltc_1.value=ie.state.rectAreaLTC1,Me.ltc_2.value=ie.state.rectAreaLTC2,Me.pointLights.value=ie.state.point,Me.pointLightShadows.value=ie.state.pointShadow,Me.hemisphereLights.value=ie.state.hemi,Me.directionalShadowMap.value=ie.state.directionalShadowMap,Me.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Me.spotShadowMap.value=ie.state.spotShadowMap,Me.spotLightMatrix.value=ie.state.spotLightMatrix,Me.spotLightMap.value=ie.state.spotLightMap,Me.pointShadowMap.value=ie.state.pointShadowMap,Me.pointShadowMatrix.value=ie.state.pointShadowMatrix),ce.currentProgram=nt,ce.uniformsList=null,nt}function rr(L){if(L.uniformsList===null){const te=L.currentProgram.getUniforms();L.uniformsList=wo.seqWithValue(te.seq,L.uniforms)}return L.uniformsList}function Ur(L,te){const he=He.get(L);he.outputColorSpace=te.outputColorSpace,he.batching=te.batching,he.batchingColor=te.batchingColor,he.instancing=te.instancing,he.instancingColor=te.instancingColor,he.instancingMorph=te.instancingMorph,he.skinning=te.skinning,he.morphTargets=te.morphTargets,he.morphNormals=te.morphNormals,he.morphColors=te.morphColors,he.morphTargetsCount=te.morphTargetsCount,he.numClippingPlanes=te.numClippingPlanes,he.numIntersection=te.numClipIntersection,he.vertexAlphas=te.vertexAlphas,he.vertexTangents=te.vertexTangents,he.toneMapping=te.toneMapping}function Cs(L,te,he,ce,ie){te.isScene!==!0&&(te=Ae),ot.resetTextureUnits();const Se=te.fog,Ne=ce.isMeshStandardMaterial?te.environment:null,We=Y===null?F.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ms,Ve=(ce.isMeshStandardMaterial?St:Ht).get(ce.envMap||Ne),Ke=ce.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,nt=!!he.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Me=!!he.morphAttributes.position,vt=!!he.morphAttributes.normal,Rt=!!he.morphAttributes.color;let Kt=Ji;ce.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Kt=F.toneMapping);const Bt=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Ct=Bt!==void 0?Bt.length:0,Ze=He.get(ce),Xt=_.state.lights;if(Qe===!0&&(de===!0||L!==A)){const Qt=L===A&&ce.id===N;Ie.setState(ce,L,Qt)}let Mt=!1;ce.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Xt.state.version||Ze.outputColorSpace!==We||ie.isBatchedMesh&&Ze.batching===!1||!ie.isBatchedMesh&&Ze.batching===!0||ie.isBatchedMesh&&Ze.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&Ze.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&Ze.instancing===!1||!ie.isInstancedMesh&&Ze.instancing===!0||ie.isSkinnedMesh&&Ze.skinning===!1||!ie.isSkinnedMesh&&Ze.skinning===!0||ie.isInstancedMesh&&Ze.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Ze.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Ze.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Ze.instancingMorph===!1&&ie.morphTexture!==null||Ze.envMap!==Ve||ce.fog===!0&&Ze.fog!==Se||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Ie.numPlanes||Ze.numIntersection!==Ie.numIntersection)||Ze.vertexAlphas!==Ke||Ze.vertexTangents!==nt||Ze.morphTargets!==Me||Ze.morphNormals!==vt||Ze.morphColors!==Rt||Ze.toneMapping!==Kt||Ze.morphTargetsCount!==Ct)&&(Mt=!0):(Mt=!0,Ze.__version=ce.version);let hn=Ze.currentProgram;Mt===!0&&(hn=ni(ce,te,ie));let ii=!1,M=!1,Ot=!1;const qt=hn.getUniforms(),fn=Ze.uniforms;if(Ge.useProgram(hn.program)&&(ii=!0,M=!0,Ot=!0),ce.id!==N&&(N=ce.id,M=!0),ii||A!==L){Ge.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),qt.setValue(W,"projectionMatrix",L.projectionMatrix),qt.setValue(W,"viewMatrix",L.matrixWorldInverse);const ln=qt.map.cameraPosition;ln!==void 0&&ln.setValue(W,ue.setFromMatrixPosition(L.matrixWorld)),et.logarithmicDepthBuffer&&qt.setValue(W,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&qt.setValue(W,"isOrthographic",L.isOrthographicCamera===!0),A!==L&&(A=L,M=!0,Ot=!0)}if(ie.isSkinnedMesh){qt.setOptional(W,ie,"bindMatrix"),qt.setOptional(W,ie,"bindMatrixInverse");const Qt=ie.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),qt.setValue(W,"boneTexture",Qt.boneTexture,ot))}ie.isBatchedMesh&&(qt.setOptional(W,ie,"batchingTexture"),qt.setValue(W,"batchingTexture",ie._matricesTexture,ot),qt.setOptional(W,ie,"batchingIdTexture"),qt.setValue(W,"batchingIdTexture",ie._indirectTexture,ot),qt.setOptional(W,ie,"batchingColorTexture"),ie._colorsTexture!==null&&qt.setValue(W,"batchingColorTexture",ie._colorsTexture,ot));const on=he.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&Re.update(ie,he,hn),(M||Ze.receiveShadow!==ie.receiveShadow)&&(Ze.receiveShadow=ie.receiveShadow,qt.setValue(W,"receiveShadow",ie.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(fn.envMap.value=Ve,fn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&te.environment!==null&&(fn.envMapIntensity.value=te.environmentIntensity),M&&(qt.setValue(W,"toneMappingExposure",F.toneMappingExposure),Ze.needsLights&&Oi(fn,Ot),Se&&ce.fog===!0&&we.refreshFogUniforms(fn,Se),we.refreshMaterialUniforms(fn,ce,se,pe,_.state.transmissionRenderTarget[L.id]),wo.upload(W,rr(Ze),fn,ot)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(wo.upload(W,rr(Ze),fn,ot),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&qt.setValue(W,"center",ie.center),qt.setValue(W,"modelViewMatrix",ie.modelViewMatrix),qt.setValue(W,"normalMatrix",ie.normalMatrix),qt.setValue(W,"modelMatrix",ie.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const Qt=ce.uniformsGroups;for(let ln=0,mi=Qt.length;ln<mi;ln++){const qn=Qt[ln];ut.update(qn,hn),ut.bind(qn,hn)}}return hn}function Oi(L,te){L.ambientLightColor.needsUpdate=te,L.lightProbe.needsUpdate=te,L.directionalLights.needsUpdate=te,L.directionalLightShadows.needsUpdate=te,L.pointLights.needsUpdate=te,L.pointLightShadows.needsUpdate=te,L.spotLights.needsUpdate=te,L.spotLightShadows.needsUpdate=te,L.rectAreaLights.needsUpdate=te,L.hemisphereLights.needsUpdate=te}function Ps(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(L,te,he){const ce=He.get(L);ce.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),He.get(L.texture).__webglTexture=te,He.get(L.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:he,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,te){const he=He.get(L);he.__webglFramebuffer=te,he.__useDefaultFramebuffer=te===void 0};const sr=W.createFramebuffer();this.setRenderTarget=function(L,te=0,he=0){Y=L,S=te,G=he;let ce=!0,ie=null,Se=!1,Ne=!1;if(L){const Ve=He.get(L);if(Ve.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(W.FRAMEBUFFER,null),ce=!1;else if(Ve.__webglFramebuffer===void 0)ot.setupRenderTarget(L);else if(Ve.__hasExternalTextures)ot.rebindTextures(L,He.get(L.texture).__webglTexture,He.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const Me=L.depthTexture;if(Ve.__boundDepthTexture!==Me){if(Me!==null&&He.has(Me)&&(L.width!==Me.image.width||L.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(L)}}const Ke=L.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ne=!0);const nt=He.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(nt[te])?ie=nt[te][he]:ie=nt[te],Se=!0):L.samples>0&&ot.useMultisampledRTT(L)===!1?ie=He.get(L).__webglMultisampledFramebuffer:Array.isArray(nt)?ie=nt[he]:ie=nt,O.copy(L.viewport),K.copy(L.scissor),oe=L.scissorTest}else O.copy(je).multiplyScalar(se).floor(),K.copy(at).multiplyScalar(se).floor(),oe=Et;if(he!==0&&(ie=sr),Ge.bindFramebuffer(W.FRAMEBUFFER,ie)&&ce&&Ge.drawBuffers(L,ie),Ge.viewport(O),Ge.scissor(K),Ge.setScissorTest(oe),Se){const Ve=He.get(L.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ve.__webglTexture,he)}else if(Ne){const Ve=te;for(let Ke=0;Ke<L.textures.length;Ke++){const nt=He.get(L.textures[Ke]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Ke,nt.__webglTexture,he,Ve)}}else if(L!==null&&he!==0){const Ve=He.get(L.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ve.__webglTexture,he)}N=-1},this.readRenderTargetPixels=function(L,te,he,ce,ie,Se,Ne,We=0){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=He.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ve=Ve[Ne]),Ve){Ge.bindFramebuffer(W.FRAMEBUFFER,Ve);try{const Ke=L.textures[We],nt=Ke.format,Me=Ke.type;if(!et.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=L.width-ce&&he>=0&&he<=L.height-ie&&(L.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+We),W.readPixels(te,he,ce,ie,Ye.convert(nt),Ye.convert(Me),Se))}finally{const Ke=Y!==null?He.get(Y).__webglFramebuffer:null;Ge.bindFramebuffer(W.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(L,te,he,ce,ie,Se,Ne,We=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=He.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ve=Ve[Ne]),Ve)if(te>=0&&te<=L.width-ce&&he>=0&&he<=L.height-ie){Ge.bindFramebuffer(W.FRAMEBUFFER,Ve);const Ke=L.textures[We],nt=Ke.format,Me=Ke.type;if(!et.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const vt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,vt),W.bufferData(W.PIXEL_PACK_BUFFER,Se.byteLength,W.STREAM_READ),L.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+We),W.readPixels(te,he,ce,ie,Ye.convert(nt),Ye.convert(Me),0);const Rt=Y!==null?He.get(Y).__webglFramebuffer:null;Ge.bindFramebuffer(W.FRAMEBUFFER,Rt);const Kt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Ay(W,Kt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,vt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Se),W.deleteBuffer(vt),W.deleteSync(Kt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,te=null,he=0){const ce=Math.pow(2,-he),ie=Math.floor(L.image.width*ce),Se=Math.floor(L.image.height*ce),Ne=te!==null?te.x:0,We=te!==null?te.y:0;ot.setTexture2D(L,0),W.copyTexSubImage2D(W.TEXTURE_2D,he,0,0,Ne,We,ie,Se),Ge.unbindTexture()};const ki=W.createFramebuffer(),Ds=W.createFramebuffer();this.copyTextureToTexture=function(L,te,he=null,ce=null,ie=0,Se=null){Se===null&&(ie!==0?(fa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=ie,ie=0):Se=0);let Ne,We,Ve,Ke,nt,Me,vt,Rt,Kt;const Bt=L.isCompressedTexture?L.mipmaps[Se]:L.image;if(he!==null)Ne=he.max.x-he.min.x,We=he.max.y-he.min.y,Ve=he.isBox3?he.max.z-he.min.z:1,Ke=he.min.x,nt=he.min.y,Me=he.isBox3?he.min.z:0;else{const on=Math.pow(2,-ie);Ne=Math.floor(Bt.width*on),We=Math.floor(Bt.height*on),L.isDataArrayTexture?Ve=Bt.depth:L.isData3DTexture?Ve=Math.floor(Bt.depth*on):Ve=1,Ke=0,nt=0,Me=0}ce!==null?(vt=ce.x,Rt=ce.y,Kt=ce.z):(vt=0,Rt=0,Kt=0);const Ct=Ye.convert(te.format),Ze=Ye.convert(te.type);let Xt;te.isData3DTexture?(ot.setTexture3D(te,0),Xt=W.TEXTURE_3D):te.isDataArrayTexture||te.isCompressedArrayTexture?(ot.setTexture2DArray(te,0),Xt=W.TEXTURE_2D_ARRAY):(ot.setTexture2D(te,0),Xt=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,te.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,te.unpackAlignment);const Mt=W.getParameter(W.UNPACK_ROW_LENGTH),hn=W.getParameter(W.UNPACK_IMAGE_HEIGHT),ii=W.getParameter(W.UNPACK_SKIP_PIXELS),M=W.getParameter(W.UNPACK_SKIP_ROWS),Ot=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,Bt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Bt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Ke),W.pixelStorei(W.UNPACK_SKIP_ROWS,nt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Me);const qt=L.isDataArrayTexture||L.isData3DTexture,fn=te.isDataArrayTexture||te.isData3DTexture;if(L.isDepthTexture){const on=He.get(L),Qt=He.get(te),ln=He.get(on.__renderTarget),mi=He.get(Qt.__renderTarget);Ge.bindFramebuffer(W.READ_FRAMEBUFFER,ln.__webglFramebuffer),Ge.bindFramebuffer(W.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let qn=0;qn<Ve;qn++)qt&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,He.get(L).__webglTexture,ie,Me+qn),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,He.get(te).__webglTexture,Se,Kt+qn)),W.blitFramebuffer(Ke,nt,Ne,We,vt,Rt,Ne,We,W.DEPTH_BUFFER_BIT,W.NEAREST);Ge.bindFramebuffer(W.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ie!==0||L.isRenderTargetTexture||He.has(L)){const on=He.get(L),Qt=He.get(te);Ge.bindFramebuffer(W.READ_FRAMEBUFFER,ki),Ge.bindFramebuffer(W.DRAW_FRAMEBUFFER,Ds);for(let ln=0;ln<Ve;ln++)qt?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,on.__webglTexture,ie,Me+ln):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,on.__webglTexture,ie),fn?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Qt.__webglTexture,Se,Kt+ln):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Qt.__webglTexture,Se),ie!==0?W.blitFramebuffer(Ke,nt,Ne,We,vt,Rt,Ne,We,W.COLOR_BUFFER_BIT,W.NEAREST):fn?W.copyTexSubImage3D(Xt,Se,vt,Rt,Kt+ln,Ke,nt,Ne,We):W.copyTexSubImage2D(Xt,Se,vt,Rt,Ke,nt,Ne,We);Ge.bindFramebuffer(W.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else fn?L.isDataTexture||L.isData3DTexture?W.texSubImage3D(Xt,Se,vt,Rt,Kt,Ne,We,Ve,Ct,Ze,Bt.data):te.isCompressedArrayTexture?W.compressedTexSubImage3D(Xt,Se,vt,Rt,Kt,Ne,We,Ve,Ct,Bt.data):W.texSubImage3D(Xt,Se,vt,Rt,Kt,Ne,We,Ve,Ct,Ze,Bt):L.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Se,vt,Rt,Ne,We,Ct,Ze,Bt.data):L.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Se,vt,Rt,Bt.width,Bt.height,Ct,Bt.data):W.texSubImage2D(W.TEXTURE_2D,Se,vt,Rt,Ne,We,Ct,Ze,Bt);W.pixelStorei(W.UNPACK_ROW_LENGTH,Mt),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,hn),W.pixelStorei(W.UNPACK_SKIP_PIXELS,ii),W.pixelStorei(W.UNPACK_SKIP_ROWS,M),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Ot),Se===0&&te.generateMipmaps&&W.generateMipmap(Xt),Ge.unbindTexture()},this.initRenderTarget=function(L){He.get(L).__webglFramebuffer===void 0&&ot.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?ot.setTextureCube(L,0):L.isData3DTexture?ot.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?ot.setTexture2DArray(L,0):ot.setTexture2D(L,0),Ge.unbindTexture()},this.resetState=function(){S=0,G=0,Y=null,Ge.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=kt._getDrawingBufferColorSpace(e),t.unpackColorSpace=kt._getUnpackColorSpace()}}const qf={type:"change"},Vu={type:"start"},Lp={type:"end"},uo=new Fo,Yf=new Ki,eM=Math.cos(70*My.DEG2RAD),mn=new Q,Un=2*Math.PI,Wt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},lc=1e-6;class tM extends gx{constructor(e,t=null){super(e,t),this.state=Wt.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ms.ROTATE,MIDDLE:ms.DOLLY,RIGHT:ms.PAN},this.touches={ONE:ds.ROTATE,TWO:ds.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new er,this._lastTargetPosition=new Q,this._quat=new er().setFromUnitVectors(e.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bf,this._sphericalDelta=new bf,this._scale=1,this._panOffset=new Q,this._rotateStart=new ct,this._rotateEnd=new ct,this._rotateDelta=new ct,this._panStart=new ct,this._panEnd=new ct,this._panDelta=new ct,this._dollyStart=new ct,this._dollyEnd=new ct,this._dollyDelta=new ct,this._dollyDirection=new Q,this._mouse=new ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iM.bind(this),this._onPointerDown=nM.bind(this),this._onPointerUp=rM.bind(this),this._onContextMenu=hM.bind(this),this._onMouseWheel=oM.bind(this),this._onKeyDown=lM.bind(this),this._onTouchStart=cM.bind(this),this._onTouchMove=uM.bind(this),this._onMouseDown=sM.bind(this),this._onMouseMove=aM.bind(this),this._interceptControlDown=fM.bind(this),this._interceptControlUp=dM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qf),this.update(),this.state=Wt.NONE}update(e=null){const t=this.object.position;mn.copy(t).sub(this.target),mn.applyQuaternion(this._quat),this._spherical.setFromVector3(mn),this.autoRotate&&this.state===Wt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Un:n>Math.PI&&(n-=Un),r<-Math.PI?r+=Un:r>Math.PI&&(r-=Un),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=l!=this._spherical.radius}if(mn.setFromSpherical(this._spherical),mn.applyQuaternion(this._quatInverse),t.copy(this.target).add(mn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const c=mn.length();l=this._clampDistance(c*this._scale);const f=c-l;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),a=!!f}else if(this.object.isOrthographicCamera){const c=new Q(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=f!==this.object.zoom;const h=new Q(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(c),this.object.updateMatrixWorld(),l=mn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(uo.origin.copy(this.object.position),uo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(uo.direction))<eM?this.object.lookAt(this.target):(Yf.setFromNormalAndCoplanarPoint(this.object.up,this.target),uo.intersectPlane(Yf,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>lc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>lc||this._lastTargetPosition.distanceToSquared(this.target)>lc?(this.dispatchEvent(qf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Un/60*this.autoRotateSpeed*e:Un/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){mn.setFromMatrixColumn(t,0),mn.multiplyScalar(-e),this._panOffset.add(mn)}_panUp(e,t){this.screenSpacePanning===!0?mn.setFromMatrixColumn(t,1):(mn.setFromMatrixColumn(t,0),mn.crossVectors(this.object.up,mn)),mn.multiplyScalar(e),this._panOffset.add(mn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;mn.copy(r).sub(this.target);let a=mn.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,a=t-n.top,l=n.width,c=n.height;this._mouse.x=r/l*2-1,this._mouse.y=-(a/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/t.clientHeight),this._rotateUp(Un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/t.clientHeight),this._rotateUp(Un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(l,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ct,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function nM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function iM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function rM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Lp),this.state=Wt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function sM(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ms.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Wt.DOLLY;break;case ms.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Wt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Wt.ROTATE}break;case ms.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Wt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Wt.PAN}break;default:this.state=Wt.NONE}this.state!==Wt.NONE&&this.dispatchEvent(Vu)}function aM(i){switch(this.state){case Wt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Wt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Wt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function oM(i){this.enabled===!1||this.enableZoom===!1||this.state!==Wt.NONE||(i.preventDefault(),this.dispatchEvent(Vu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Lp))}function lM(i){this.enabled!==!1&&this._handleKeyDown(i)}function cM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ds.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Wt.TOUCH_ROTATE;break;case ds.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Wt.TOUCH_PAN;break;default:this.state=Wt.NONE}break;case 2:switch(this.touches.TWO){case ds.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Wt.TOUCH_DOLLY_PAN;break;case ds.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Wt.TOUCH_DOLLY_ROTATE;break;default:this.state=Wt.NONE}break;default:this.state=Wt.NONE}this.state!==Wt.NONE&&this.dispatchEvent(Vu)}function uM(i){switch(this._trackPointer(i),this.state){case Wt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Wt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Wt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Wt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Wt.NONE}}function hM(i){this.enabled!==!1&&i.preventDefault()}function fM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class pM extends xp{constructor(){super();const e=new Fr;e.deleteAttribute("uv");const t=new au({side:Cn}),n=new au,r=new dx(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const a=new an(e,t);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const l=new ex(e,n,6),c=new un;c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),c.updateMatrix(),l.setMatrixAt(0,c.matrix),c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),c.updateMatrix(),l.setMatrixAt(1,c.matrix),c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),c.updateMatrix(),l.setMatrixAt(2,c.matrix),c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),c.updateMatrix(),l.setMatrixAt(3,c.matrix),c.position.set(2.291,-.756,-2.621),c.rotation.set(0,-.286,0),c.scale.set(1.546,1.552,1.496),c.updateMatrix(),l.setMatrixAt(4,c.matrix),c.position.set(-2.193,-.369,-5.547),c.rotation.set(0,.516,0),c.scale.set(3.875,3.487,2.986),c.updateMatrix(),l.setMatrixAt(5,c.matrix),this.add(l);const f=new an(e,us(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const h=new an(e,us(50));h.position.set(-16.109,18.021,-8.207),h.scale.set(.1,2.425,2.751),this.add(h);const m=new an(e,us(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const p=new an(e,us(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);const g=new an(e,us(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const v=new an(e,us(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function us(i){return new ax({color:0,emissive:16777215,emissiveIntensity:i})}const mM=/^[og]\s*(.+)?/,gM=/^mtllib /,_M=/^usemtl /,vM=/^usemap /,Kf=/\s+/,Zf=new Q,cc=new Q,Jf=new Q,Qf=new Q,Qn=new Q,ho=new ft;function yM(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,a){const l=this._finalize(!1);l&&(l.inherited||l.groupCount<=0)&&this.materials.splice(l.index,1);const c={index:this.materials.length,name:r||"",mtllib:Array.isArray(a)&&a.length>0?a[a.length-1]:"",smooth:l!==void 0?l.smooth:this.smooth,groupStart:l!==void 0?l.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(f){const h={index:typeof f=="number"?f:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return h.clone=this.clone.bind(h),h}};return this.materials.push(c),c},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const a=this.currentMaterial();if(a&&a.groupEnd===-1&&(a.groupEnd=this.geometry.vertices.length/3,a.groupCount=a.groupEnd-a.groupStart,a.inherited=!1),r&&this.materials.length>1)for(let l=this.materials.length-1;l>=0;l--)this.materials[l].groupCount<=0&&this.materials.splice(l,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),a}},n&&n.name&&typeof n.clone=="function"){const r=n.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const r=this.vertices,a=this.object.geometry.vertices;a.push(r[e+0],r[e+1],r[e+2]),a.push(r[t+0],r[t+1],r[t+2]),a.push(r[n+0],r[n+1],r[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const r=this.normals,a=this.object.geometry.normals;a.push(r[e+0],r[e+1],r[e+2]),a.push(r[t+0],r[t+1],r[t+2]),a.push(r[n+0],r[n+1],r[n+2])},addFaceNormal:function(e,t,n){const r=this.vertices,a=this.object.geometry.normals;Zf.fromArray(r,e),cc.fromArray(r,t),Jf.fromArray(r,n),Qn.subVectors(Jf,cc),Qf.subVectors(Zf,cc),Qn.cross(Qf),Qn.normalize(),a.push(Qn.x,Qn.y,Qn.z),a.push(Qn.x,Qn.y,Qn.z),a.push(Qn.x,Qn.y,Qn.z)},addColor:function(e,t,n){const r=this.colors,a=this.object.geometry.colors;r[e]!==void 0&&a.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&a.push(r[t+0],r[t+1],r[t+2]),r[n]!==void 0&&a.push(r[n+0],r[n+1],r[n+2])},addUV:function(e,t,n){const r=this.uvs,a=this.object.geometry.uvs;a.push(r[e+0],r[e+1]),a.push(r[t+0],r[t+1]),a.push(r[n+0],r[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,r,a,l,c,f,h){const m=this.vertices.length;let p=this.parseVertexIndex(e,m),g=this.parseVertexIndex(t,m),v=this.parseVertexIndex(n,m);if(this.addVertex(p,g,v),this.addColor(p,g,v),c!==void 0&&c!==""){const b=this.normals.length;p=this.parseNormalIndex(c,b),g=this.parseNormalIndex(f,b),v=this.parseNormalIndex(h,b),this.addNormal(p,g,v)}else this.addFaceNormal(p,g,v);if(r!==void 0&&r!==""){const b=this.uvs.length;p=this.parseUVIndex(r,b),g=this.parseUVIndex(a,b),v=this.parseUVIndex(l,b),this.addUV(p,g,v),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,r=e.length;n<r;n++){const a=this.parseVertexIndex(e[n],t);this.addVertexPoint(a),this.addColor(a)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,r=this.uvs.length;for(let a=0,l=e.length;a<l;a++)this.addVertexLine(this.parseVertexIndex(e[a],n));for(let a=0,l=t.length;a<l;a++)this.addUVLine(this.parseUVIndex(t[a],r))}};return i.startObject("",!1),i}class xM extends Uo{constructor(e){super(e),this.materials=null}load(e,t,n,r){const a=this,l=new Sp(this.manager);l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{t(a.parse(c))}catch(f){r?r(f):console.error(f),a.manager.itemError(e)}},n,r)}setMaterials(e){return this.materials=e,this}parse(e){const t=new yM;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let r=[];for(let c=0,f=n.length;c<f;c++){const h=n[c].trimStart();if(h.length===0)continue;const m=h.charAt(0);if(m!=="#")if(m==="v"){const p=h.split(Kf);switch(p[0]){case"v":t.vertices.push(parseFloat(p[1]),parseFloat(p[2]),parseFloat(p[3])),p.length>=7?(ho.setRGB(parseFloat(p[4]),parseFloat(p[5]),parseFloat(p[6]),Rn),t.colors.push(ho.r,ho.g,ho.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(p[1]),parseFloat(p[2]),parseFloat(p[3]));break;case"vt":t.uvs.push(parseFloat(p[1]),parseFloat(p[2]));break}}else if(m==="f"){const g=h.slice(1).trim().split(Kf),v=[];for(let T=0,x=g.length;T<x;T++){const _=g[T];if(_.length>0){const U=_.split("/");v.push(U)}}const b=v[0];for(let T=1,x=v.length-1;T<x;T++){const _=v[T],U=v[T+1];t.addFace(b[0],_[0],U[0],b[1],_[1],U[1],b[2],_[2],U[2])}}else if(m==="l"){const p=h.substring(1).trim().split(" ");let g=[];const v=[];if(h.indexOf("/")===-1)g=p;else for(let b=0,T=p.length;b<T;b++){const x=p[b].split("/");x[0]!==""&&g.push(x[0]),x[1]!==""&&v.push(x[1])}t.addLineGeometry(g,v)}else if(m==="p"){const g=h.slice(1).trim().split(" ");t.addPointGeometry(g)}else if((r=mM.exec(h))!==null){const p=(" "+r[0].slice(1).trim()).slice(1);t.startObject(p)}else if(_M.test(h))t.object.startMaterial(h.substring(7).trim(),t.materialLibraries);else if(gM.test(h))t.materialLibraries.push(h.substring(7).trim());else if(vM.test(h))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(m==="s"){if(r=h.split(" "),r.length>1){const g=r[1].trim().toLowerCase();t.object.smooth=g!=="0"&&g!=="off"}else t.object.smooth=!0;const p=t.object.currentMaterial();p&&(p.smooth=t.object.smooth)}else{if(h==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+h+'"')}}t.finalize();const a=new Rr;if(a.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let c=0,f=t.objects.length;c<f;c++){const h=t.objects[c],m=h.geometry,p=h.materials,g=m.type==="Line",v=m.type==="Points";let b=!1;if(m.vertices.length===0)continue;const T=new Ln;T.setAttribute("position",new sn(m.vertices,3)),m.normals.length>0&&T.setAttribute("normal",new sn(m.normals,3)),m.colors.length>0&&(b=!0,T.setAttribute("color",new sn(m.colors,3))),m.hasUVIndices===!0&&T.setAttribute("uv",new sn(m.uvs,2));const x=[];for(let U=0,I=p.length;U<I;U++){const F=p[U],V=F.name+"_"+F.smooth+"_"+b;let S=t.materials[V];if(this.materials!==null){if(S=this.materials.create(F.name),g&&S&&!(S instanceof xo)){const G=new xo;fi.prototype.copy.call(G,S),G.color.copy(S.color),S=G}else if(v&&S&&!(S instanceof aa)){const G=new aa({size:10,sizeAttenuation:!1});fi.prototype.copy.call(G,S),G.color.copy(S.color),G.map=S.map,S=G}}S===void 0&&(g?S=new xo:v?S=new aa({size:1,sizeAttenuation:!1}):S=new sx,S.name=F.name,S.flatShading=!F.smooth,S.vertexColors=b,t.materials[V]=S),x.push(S)}let _;if(x.length>1){for(let U=0,I=p.length;U<I;U++){const F=p[U];T.addGroup(F.groupStart,F.groupCount,U)}g?_=new mf(T,x):v?_=new Ql(T,x):_=new an(T,x)}else g?_=new mf(T,x[0]):v?_=new Ql(T,x[0]):_=new an(T,x[0]);_.name=h.name,a.add(_)}else if(t.vertices.length>0){const c=new aa({size:1,sizeAttenuation:!1}),f=new Ln;f.setAttribute("position",new sn(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(f.setAttribute("color",new sn(t.colors,3)),c.vertexColors=!0);const h=new Ql(f,c);a.add(h)}return a}}class wM extends Uo{constructor(e){super(e)}load(e,t,n,r){const a=this,l=new Sp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{t(a.parse(c))}catch(f){r?r(f):console.error(f),a.manager.itemError(e)}},n,r)}parse(e){function t(h){const m=new DataView(h),p=32/8*3+32/8*3*3+16/8,g=m.getUint32(80,!0);if(80+32/8+g*p===m.byteLength)return!0;const b=[115,111,108,105,100];for(let T=0;T<5;T++)if(n(b,m,T))return!1;return!0}function n(h,m,p){for(let g=0,v=h.length;g<v;g++)if(h[g]!==m.getUint8(p+g))return!1;return!0}function r(h){const m=new DataView(h),p=m.getUint32(80,!0);let g,v,b,T=!1,x,_,U,I,F;for(let O=0;O<70;O++)m.getUint32(O,!1)==1129270351&&m.getUint8(O+4)==82&&m.getUint8(O+5)==61&&(T=!0,x=new Float32Array(p*3*3),_=m.getUint8(O+6)/255,U=m.getUint8(O+7)/255,I=m.getUint8(O+8)/255,F=m.getUint8(O+9)/255);const V=84,S=50,G=new Ln,Y=new Float32Array(p*3*3),N=new Float32Array(p*3*3),A=new ft;for(let O=0;O<p;O++){const K=V+O*S,oe=m.getFloat32(K,!0),Z=m.getFloat32(K+4,!0),$=m.getFloat32(K+8,!0);if(T){const ee=m.getUint16(K+48,!0);(ee&32768)===0?(g=(ee&31)/31,v=(ee>>5&31)/31,b=(ee>>10&31)/31):(g=_,v=U,b=I)}for(let ee=1;ee<=3;ee++){const pe=K+ee*12,se=O*3*3+(ee-1)*3;Y[se]=m.getFloat32(pe,!0),Y[se+1]=m.getFloat32(pe+4,!0),Y[se+2]=m.getFloat32(pe+8,!0),N[se]=oe,N[se+1]=Z,N[se+2]=$,T&&(A.setRGB(g,v,b,Rn),x[se]=A.r,x[se+1]=A.g,x[se+2]=A.b)}}return G.setAttribute("position",new On(Y,3)),G.setAttribute("normal",new On(N,3)),T&&(G.setAttribute("color",new On(x,3)),G.hasColors=!0,G.alpha=F),G}function a(h){const m=new Ln,p=/solid([\s\S]*?)endsolid/g,g=/facet([\s\S]*?)endfacet/g,v=/solid\s(.+)/;let b=0;const T=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,x=new RegExp("vertex"+T+T+T,"g"),_=new RegExp("normal"+T+T+T,"g"),U=[],I=[],F=[],V=new Q;let S,G=0,Y=0,N=0;for(;(S=p.exec(h))!==null;){Y=N;const A=S[0],O=(S=v.exec(A))!==null?S[1]:"";for(F.push(O);(S=g.exec(A))!==null;){let Z=0,$=0;const ee=S[0];for(;(S=_.exec(ee))!==null;)V.x=parseFloat(S[1]),V.y=parseFloat(S[2]),V.z=parseFloat(S[3]),$++;for(;(S=x.exec(ee))!==null;)U.push(parseFloat(S[1]),parseFloat(S[2]),parseFloat(S[3])),I.push(V.x,V.y,V.z),Z++,N++;$!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+b),Z!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+b),b++}const K=Y,oe=N-Y;m.userData.groupNames=F,m.addGroup(K,oe,G),G++}return m.setAttribute("position",new sn(U,3)),m.setAttribute("normal",new sn(I,3)),m}function l(h){return typeof h!="string"?new TextDecoder().decode(h):h}function c(h){if(typeof h=="string"){const m=new Uint8Array(h.length);for(let p=0;p<h.length;p++)m[p]=h.charCodeAt(p)&255;return m.buffer||m}else return h}const f=c(e);return t(f)?r(f):a(l(e))}}const fo={PLANE:0,SPHERE:2,CYLINDER:5,BOX:6};function ed(i){const e=new ft(i[0],i[1],i[2]);return e.r<.08&&e.g<.08&&e.b<.08&&e.setRGB(.12,.14,.15),new au({color:e,roughness:.58,metalness:.22,transparent:i[3]<.999,opacity:i[3]})}function td(i){const e=new jt().set(i[0],i[1],i[2],0,i[3],i[4],i[5],0,i[6],i[7],i[8],0,0,0,0,1);return new er().setFromRotationMatrix(e)}class EM{constructor(e,t){this.canvas=e,this.sim=t,this.renderer=new QS({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Jd,this.renderer.outputColorSpace=Rn,this.renderer.toneMapping=Qd,this.renderer.toneMappingExposure=1.05,this.scene=new xp,this.scene.background=new ft(14541798),this.scene.fog=new Nu(14541798,18,42),this.world=new Rr,this.world.rotation.x=-Math.PI/2,this.scene.add(this.world),this.camera=new Nn(46,1,.03,120),this.camera.position.set(2.8,1.55,2.7),this.controls=new tM(this.camera,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.075,this.controls.minDistance=.8,this.controls.maxDistance=12,this.controls.maxPolarAngle=Math.PI/2-.02,this.controls.target.set(.2,.28,0);const n=new ou(this.renderer);this.scene.environment=n.fromScene(new pM,.04).texture,this.scene.environmentIntensity=.48,n.dispose(),this.bodyGroups=new Map,this.followTarget=new Q(0,.25,0),this.depthTarget=null,this.depthPixels=null,this.depthCamera=new Nn,this.depthMaterial=new bp({depthPacking:lp,blending:Fi}),this.world.add(this.depthCamera),this.#e(),this.#t(),this.#i(),this.resizeObserver=new ResizeObserver(()=>this.#i()),this.resizeObserver.observe(e)}#e(){this.scene.add(new hx(16317439,8226437,1.45));const e=new Ef(16775920,2.5);e.position.set(4,8,3),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),Object.assign(e.shadow.camera,{left:-5,right:5,top:5,bottom:-5,near:.3,far:24}),e.shadow.camera.updateProjectionMatrix(),e.shadow.bias=-.001,this.scene.add(e,e.target),this.keyLight=e;const t=new Ef(9021375,.9);t.position.set(-4,3,-3),this.scene.add(t)}#t(){for(const e of this.sim.describeWorldGeoms()){let t=null;if(e.type===fo.PLANE?t=new ma(70,24):e.type===fo.BOX?t=new Fr(2*e.size[0],2*e.size[1],2*e.size[2]):e.type===fo.SPHERE?t=new Bu(e.size[0],18,12):e.type===fo.CYLINDER&&(t=new ku(e.size[0],e.size[0],2*e.size[1],20),t.rotateX(Math.PI/2)),!t)continue;const n=e.name==="floor"?[.56,.61,.6,1]:e.rgba,r=new an(t,ed(n));r.name=e.name,r.position.fromArray(e.position),r.quaternion.copy(td(e.matrix)),r.receiveShadow=!0,r.castShadow=e.name!=="floor",this.world.add(r)}}#n(e){const t=this.sim.bodyId(e);if(t<0)return null;let n=this.bodyGroups.get(t);return n||(n=new Rr,n.name=e,this.world.add(n),this.bodyGroups.set(t,n)),n}addRobotMeshes(e,t=null){const n=new xM,r=new wM,a=new Map,l=new Map;for(let f=0;f<e.robot.meshes.length;f++){const h=e.robot.meshes[f],m=this.sim.assets.get(h.file);if(!m)throw new Error(`mesh payload not loaded: ${h.file}`);const p=h.file.split(".").pop().toLowerCase();let g;if(p==="obj"){let v=a.get(h.file);v||(v=new TextDecoder().decode(m),a.set(h.file,v)),g=n.parse(v)}else if(p==="stl"){const v=m.buffer.slice(m.byteOffset,m.byteOffset+m.byteLength);g=new an(r.parse(v))}else throw new Error(`unsupported robot mesh format: ${h.file}`);g.scale.fromArray(h.scale),l.set(h.name,g),t?.(f+1,e.robot.meshes.length,h.file)}a.clear();let c=0;for(const f of e.robot.visuals){const h=l.get(f.mesh),m=this.#n(f.body);if(!h||!m)continue;const p=h.clone(!0),g=ed(f.rgba);p.traverse(v=>{v.isMesh&&(v.material=g,v.castShadow=!0,v.receiveShadow=!0)}),p.position.fromArray(f.pos),p.quaternion.set(f.quat[1],f.quat[2],f.quat[3],f.quat[0]),m.add(p),c++}return c}#i(){const e=Math.max(1,this.canvas.clientWidth),t=Math.max(1,this.canvas.clientHeight);this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}#r(){const e=this.sim.data;for(const[t,n]of this.bodyGroups)n.position.set(e.xpos[3*t],e.xpos[3*t+1],e.xpos[3*t+2]),n.quaternion.set(e.xquat[4*t+1],e.xquat[4*t+2],e.xquat[4*t+3],e.xquat[4*t])}#s(e,t){this.depthTarget?.width===e&&this.depthTarget?.height===t||(this.depthTarget?.dispose(),this.depthTarget=new tr(e,t,{minFilter:Pn,magFilter:Pn,format:ei,type:hi,depthBuffer:!0,stencilBuffer:!1}),this.depthTarget.texture.generateMipmaps=!1,this.depthPixels=new Uint8Array(e*t*4))}captureDepth(e,t){const{cameraId:n,width:r,height:a,fovy:l,near:c,far:f}=e;if(t.length!==r*a)throw new Error(`depth output has ${t.length} pixels, expected ${r*a}`);this.#s(r,a),this.#r();const h=this.sim.data,m=3*n,p=9*n;this.depthCamera.position.fromArray(h.cam_xpos,m),this.depthCamera.quaternion.copy(td(h.cam_xmat.subarray(p,p+9))),this.depthCamera.fov=l,this.depthCamera.aspect=r/a,this.depthCamera.near=c,this.depthCamera.far=f,this.depthCamera.updateProjectionMatrix();const g=this.renderer.getRenderTarget(),v=this.scene.background,b=this.scene.overrideMaterial,T=this.renderer.getClearColor(new ft),x=this.renderer.getClearAlpha();try{this.scene.background=null,this.scene.overrideMaterial=this.depthMaterial,this.renderer.setRenderTarget(this.depthTarget),this.renderer.setClearColor(16777215,1),this.renderer.clear(!0,!0,!0),this.renderer.render(this.scene,this.depthCamera),this.renderer.readRenderTargetPixels(this.depthTarget,0,0,r,a,this.depthPixels)}finally{this.renderer.setRenderTarget(g),this.renderer.setClearColor(T,x),this.scene.background=v,this.scene.overrideMaterial=b}for(let _=0;_<a;_++){const U=a-_-1;for(let I=0;I<r;I++){const F=4*(U*r+I),V=l0(this.depthPixels,F);t[_*r+I]=c0(V,c,f)}}return t}render(e=!0){if(this.#r(),e){const t=this.sim.readState(),r=new Q(t.position[0]+.15,t.position[2],-t.position[1]).clone().sub(this.followTarget).multiplyScalar(.075);this.followTarget.add(r),this.controls.target.add(r),this.camera.position.add(r),this.keyLight.position.x=this.followTarget.x+4,this.keyLight.target.position.set(this.followTarget.x,this.followTarget.y,this.followTarget.z)}this.controls.update(),this.renderer.render(this.scene,this.camera)}dispose(){this.resizeObserver.disconnect(),this.controls.dispose(),this.depthTarget?.dispose(),this.depthMaterial.dispose(),this.renderer.dispose()}}function nd(i){return typeof i=="object"&&i!==null&&"value"in i?i.value:i}async function id(i,e,t){const n=await fetch(new URL(i,document.baseURI));if(!n.ok)throw new Error(`failed to fetch ${i}: HTTP ${n.status}`);const r=new Uint8Array(await n.arrayBuffer());return e?.(t,r.byteLength),r}async function bM(i,e,t=null){const n=e.robot.meshes.map(g=>g.file),r=e.robot.modelFiles??[{path:"model.xml",url:e.robot.modelUrl}],a=n.length+r.length;let l=0,c=0;const f=(g,v)=>{l++,c+=v,t?.({completed:l,totalFiles:a,completedBytes:c,label:g})},[h,m,p]=await Promise.all([i(),Promise.all(r.map(async({path:g,url:v})=>[g,await id(v,f,`Physics model: ${g}`)])),Promise.all(n.map(async g=>[g,await id(`${e.robot.assetBaseUrl}${g}`,f,g)]))]);return{mj:h,modelFiles:new Map(m),assets:new Map(p)}}class SM{constructor(e,t){this.mj=e.mj,this.manifest=t,this.assets=e.assets,this.#e(e.modelFiles,e.assets),this.model=this.mj.MjModel.from_xml_path("/unitree-web/model.xml"),this.data=new this.mj.MjData(this.model),this.baseBodyId=this.id(this.mj.mjtObj.mjOBJ_BODY,t.robot.baseBody),this.rootJointId=this.model.body_jntadr[this.baseBodyId],this.rootQposAddress=this.model.jnt_qposadr[this.rootJointId],this.rootDofAddress=this.model.jnt_dofadr[this.rootJointId],this.homeKeyId=this.id(this.mj.mjtObj.mjOBJ_KEY,"home");const n=t.robot.jointNames.length;this.jointQposAddresses=new Int32Array(n),this.jointDofAddresses=new Int32Array(n),this.actuatorIds=new Int32Array(n),t.robot.jointNames.forEach((r,a)=>{const l=this.id(this.mj.mjtObj.mjOBJ_JOINT,r);this.jointQposAddresses[a]=this.model.jnt_qposadr[l],this.jointDofAddresses[a]=this.model.jnt_dofadr[l],this.actuatorIds[a]=this.#t(l,r)}),this.gyroAddress=this.#n(t.robot.gyroSensorNames),this.q=new Float32Array(n),this.dq=new Float32Array(n),this.quaternion=new Float32Array(4),this.gyro=new Float32Array(3),this.position=new Float32Array(3),this.linearVelocity=new Float32Array(3),this.targetQ=Float32Array.from(t.robot.defaultQpos),this.kp=Float32Array.from(t.robot.kpPolicy),this.kd=Float32Array.from(t.robot.kdPolicy),this.torque=new Float32Array(n),this.velocityLimit=Number(t.robot.maxVelocity??30),this.physicsSteps=0,this.reset()}#e(e,t){const n=this.mj.FS;try{n.mkdirTree("/unitree-web/assets")}catch{}for(const[r,a]of e)n.writeFile(`/unitree-web/${r}`,a);for(const[r,a]of t)n.writeFile(`/unitree-web/assets/${r}`,a)}id(e,t,n=!0){const r=this.mj.mj_name2id(this.model,nd(e),t);if(n&&r<0)throw new Error(`MuJoCo model has no ${t}`);return r}name(e,t){return this.mj.mj_id2name(this.model,nd(e),t)||""}#t(e,t){for(let n=0;n<this.model.nu;n++)if(this.model.actuator_trnid[2*n]===e)return n;throw new Error(`no actuator drives ${t}`)}#n(e){for(const t of e){const n=this.id(this.mj.mjtObj.mjOBJ_SENSOR,t,!1);if(n>=0)return this.model.sensor_adr[n]}return-1}reset(e=null){this.mj.mj_resetData(this.model,this.data);const t=this.homeKeyId*this.model.nq;for(let n=0;n<this.model.nq;n++)this.data.qpos[n]=this.model.key_qpos[t+n];if(e){for(let r=0;r<3;r++)this.data.qpos[this.rootQposAddress+r]=e.position[r];const n=Number(e.yaw??0)/2;this.data.qpos[this.rootQposAddress+3]=Math.cos(n),this.data.qpos[this.rootQposAddress+4]=0,this.data.qpos[this.rootQposAddress+5]=0,this.data.qpos[this.rootQposAddress+6]=Math.sin(n)}return this.data.qvel.fill(0),this.data.ctrl.fill(0),this.data.qfrc_applied.fill(0),this.targetQ.set(this.manifest.robot.defaultQpos),this.kp.set(this.manifest.robot.kpPolicy),this.kd.set(this.manifest.robot.kdPolicy),this.physicsSteps=0,this.mj.mj_forward(this.model,this.data),this.readState()}setTargets(e,t=this.manifest.robot.kpPolicy,n=this.manifest.robot.kdPolicy){this.targetQ.set(e),this.kp.set(t),this.kd.set(n)}stepControl(e=null){const t=this.manifest.timing.effectiveSubsteps;for(let n=0;n<t;n++){for(let r=0;r<this.targetQ.length;r++)this.data.ctrl[this.actuatorIds[r]]=this.targetQ[r];this.mj.mj_step(this.model,this.data);for(let r=0;r<this.targetQ.length;r++)this.torque[r]=this.data.actuator_force[this.actuatorIds[r]];const a=this.data.qvel,l=this.velocityLimit;for(let r=0;r<this.jointDofAddresses.length;r++){const c=this.jointDofAddresses[r];a[c]=Math.min(l,Math.max(-l,a[c]))}this.physicsSteps++,e&&e(this.physicsSteps)}}readState(){const e=this.data.qpos,t=this.data.qvel;for(let n=0;n<this.q.length;n++)this.q[n]=e[this.jointQposAddresses[n]],this.dq[n]=t[this.jointDofAddresses[n]];for(let n=0;n<4;n++)this.quaternion[n]=e[this.rootQposAddress+3+n];for(let n=0;n<3;n++)this.gyro[n]=this.gyroAddress>=0?this.data.sensordata[this.gyroAddress+n]:t[this.rootDofAddress+3+n],this.position[n]=e[this.rootQposAddress+n],this.linearVelocity[n]=t[this.rootDofAddress+n];return{q:this.q,dq:this.dq,quaternion:this.quaternion,gyro:this.gyro,position:this.position,linearVelocity:this.linearVelocity,time:Number(this.data.time)}}hasFallen(){const e=this.quaternion,t=Math.hypot(...e)||1;e[0]/t;const n=e[1]/t,r=e[2]/t;e[3]/t;const a=2*(n*n+r*r)-1;return this.position[2]<.14||a>-.25}bodyId(e){return this.id(this.mj.mjtObj.mjOBJ_BODY,e,!1)}describeWorldGeoms(){const e=[];for(let t=0;t<this.model.ngeom;t++){const n=this.model.geom_bodyid[t];n!==0&&this.model.body_weldid[n]!==0||e.push({id:t,name:this.name(this.mj.mjtObj.mjOBJ_GEOM,t)||`geom-${t}`,type:this.model.geom_type[t],size:Array.from(this.model.geom_size.subarray(3*t,3*t+3)),rgba:Array.from(this.model.geom_rgba.subarray(4*t,4*t+4)),position:Array.from(this.data.geom_xpos.subarray(3*t,3*t+3)),matrix:Array.from(this.data.geom_xmat.subarray(9*t,9*t+9))})}return e}dispose(){this.data.delete(),this.model.delete()}}const AM=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));

export { qv as createMujoco, Yv as mujocoWasmUrl, bM as loadAssets,
    SM as Simulation, Tu as Policy, EM as Renderer, u0 as DepthCamera,
    Zv as Controller, h0 as GatePlot, n0 as corruptionNames }
