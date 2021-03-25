(this.webpackJsonpmusicwiki=this.webpackJsonpmusicwiki||[]).push([[0],{15:function(t,e,a){},28:function(t,e,a){},30:function(t,e,a){},36:function(t,e,a){},37:function(t,e,a){},38:function(t,e,a){},39:function(t,e,a){"use strict";a.r(e);var s=a(1),c=a.n(s),n=a(21),i=a.n(n),r=(a(28),a(2)),o=a(4),l=a(5),d=a(7),u=a(6),h=a(12),m=a(8),b=a(0),j=(a(30),a(15),function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).state={albums:[]},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(t){var e=this;fetch("https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=".concat(this.props.children,"&api_key=afd5ef428b7d104bd4ccdc3146c59390&format=json")).then((function(t){return t.json()})).then((function(t){return e.setState({albums:t.albums.album})}))}},{key:"render",value:function(){return Object(b.jsx)("div",{children:this.state.albums.map((function(t){return Object(b.jsxs)("div",{class:"card-item",children:[Object(b.jsx)("img",{className:"card-image",src:t.image[3]["#text"]}),Object(b.jsx)("div",{className:"card-middle",children:Object(b.jsx)("div",{class:"card-text",children:Object(b.jsx)(m.b,{to:"/album/".concat(t.name,"/").concat(t.artist.name),children:t.name})})})]})}))})}}]),a}(s.Component)),p=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).state={artist:[]},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(t){var e=this;fetch("https://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=".concat(this.props.children,"&api_key=afd5ef428b7d104bd4ccdc3146c59390&format=json")).then((function(t){return t.json()})).then((function(t){return e.setState({artist:t.topartists.artist})}))}},{key:"render",value:function(){return Object(b.jsx)("div",{children:this.state.artist.map((function(t){return Object(b.jsxs)("div",{class:"card-item",children:[Object(b.jsx)("img",{className:"card-image",src:t.image[3]["#text"]}),Object(b.jsx)("div",{className:"card-middle",children:Object(b.jsx)("div",{class:"card-text",children:Object(b.jsx)(m.b,{to:"/artist/".concat(t.name),children:t.name})})})]})}))})}}]),a}(s.Component),f=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).state={tracks:[]},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(t){var e=this;fetch("https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=".concat(this.props.children,"&api_key=afd5ef428b7d104bd4ccdc3146c59390&format=json")).then((function(t){return t.json()})).then((function(t){return e.setState({tracks:t.tracks.track})}))}},{key:"render",value:function(){return Object(b.jsx)("div",{children:this.state.tracks.map((function(t){return Object(b.jsxs)("div",{class:"card-item",children:[Object(b.jsx)("img",{className:"card-image",src:t.image[3]["#text"]}),Object(b.jsx)("div",{className:"card-middle",children:Object(b.jsx)("div",{class:"card-text",children:t.name})})]})}))})}}]),a}(s.Component);a(36);var g=function(){var t=Object(r.e)();return Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:"back-button",onClick:function(){t.goBack()},children:Object(b.jsx)("i",{class:"fa fa-angle-left","aria-hidden":"true"})})})},O=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).state={description:"",isAlbum:!1,track:!1,isArtist:!1},t.getAlbums=t.getAlbums.bind(Object(h.a)(t)),t.getTracks=t.getTracks.bind(Object(h.a)(t)),t.getArtist=t.getArtist.bind(Object(h.a)(t)),t}return Object(l.a)(a,[{key:"getAlbums",value:function(){this.setState((function(t){return{isAlbum:!t.isAlbum}}))}},{key:"getTracks",value:function(){this.setState((function(t){return{track:!t.track}}))}},{key:"getArtist",value:function(){this.setState((function(t){return{isArtist:!t.isArtist}}))}},{key:"componentDidMount",value:function(){var t=this;fetch("https://ws.audioscrobbler.com/2.0/?method=tag.getinfo&tag=".concat(this.props.match.params.name,"&api_key=afd5ef428b7d104bd4ccdc3146c59390&format=json")).then((function(t){return t.json()})).then((function(e){return t.setState({description:e.tag.wiki.summary})}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(g,{}),Object(b.jsx)("h1",{className:"text-transform",children:this.props.match.params.name}),Object(b.jsx)("h3",{className:"genre-dedscription",children:this.state.description}),Object(b.jsx)("button",{className:"tabs-button active",onClick:this.getAlbums,children:"Albums"}),Object(b.jsx)("button",{className:"tabs-button",onClick:this.getTracks,children:"Tracks"}),Object(b.jsx)("button",{className:"tabs-button",onClick:this.getArtist,children:"Artists"}),this.state.isAlbum?Object(b.jsx)(j,{children:this.props.match.params.name}):null,this.state.track?Object(b.jsx)(f,{children:this.props.match.params.name}):null,this.state.isArtist?Object(b.jsx)(p,{children:this.props.match.params.name}):null]})}}]),a}(s.Component),x=(a(37),function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).state={active:!0},t.toggleClass=t.toggleClass.bind(Object(h.a)(t)),t}return Object(l.a)(a,[{key:"toggleClass",value:function(){var t=this.state.active;this.setState({active:!t})}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"musicwiki"}),Object(b.jsx)("h4",{children:"Welcome!"}),Object(b.jsxs)("h5",{children:["Choose a genre to start with ",Object(b.jsx)("span",{onClick:this.toggleClass,className:"expand-icon",children:Object(b.jsx)("i",{className:this.state.active?"fa fa-angle-down":"fa fa-angle-up","aria-hidden":"true"})})]}),Object(b.jsx)("div",{className:this.state.active?"unexpanded":null,children:this.props.children.map((function(t){return Object(b.jsx)("div",{className:"genre-tags",children:Object(b.jsx)(m.b,{className:"genre-link",to:"/genre/".concat(t.name),children:t.name})})}))})]})}}]),a}(s.Component)),v=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).state={genres:[]},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;fetch("https://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&api_key=afd5ef428b7d104bd4ccdc3146c59390&format=json").then((function(t){return t.json()})).then((function(e){return t.setState({genres:e.tags.tag})}))}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(x,{children:this.state.genres})})}}]),a}(s.Component),k=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).state={genres:[]},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(t){var e=this;fetch("https://ws.audioscrobbler.com/2.0/?method=album.gettoptags&artist=".concat(this.props.children[0],"&album=").concat(this.props.album,"&api_key=afd5ef428b7d104bd4ccdc3146c59390&format=json")).then((function(t){return t.json()})).then((function(t){return e.setState({genres:t.toptags.tag})}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(g,{}),Object(b.jsxs)("div",{className:"bg-image",style:{backgroundImage:"url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')"},children:[Object(b.jsx)("h1",{className:"artist-detail-heading",children:this.props.album}),Object(b.jsx)("h1",{className:"artist-detail-heading",children:this.props.children[0]})]}),Object(b.jsx)("ul",{className:"tags-wrapper",children:this.state.genres?this.state.genres.map((function(t){return Object(b.jsx)("li",{className:"genre-tags tags-wrapper-item",children:Object(b.jsx)(m.b,{className:"genre-link",to:"/genre/".concat(t.name),children:t.name})})})):null}),Object(b.jsx)("p",{className:"description",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]})}}]),a}(s.Component),y=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).state={data:[]},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;fetch("https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=afd5ef428b7d104bd4ccdc3146c59390&artist=".concat(this.props.match.params.id,"&album=").concat(this.props.match.params.name,"&format=json")).then((function(t){return t.json()})).then((function(e){return t.setState({data:e.album})}))}},{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(k,{album:this.props.match.params.name,children:[this.props.match.params.id," "]})})}}]),a}(s.Component),N=a(23),w=(a(38),function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).state={data:[],tracks:[],albums:[]},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(t){var e=this;Promise.all([fetch("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=".concat(this.props.match.params.name,"&api_key=afd5ef428b7d104bd4ccdc3146c59390&format=json")).then((function(t){return t.json()})),fetch("http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=".concat(this.props.match.params.name,"&api_key=afd5ef428b7d104bd4ccdc3146c59390&format=json")).then((function(t){return t.json()})),fetch("http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=".concat(this.props.match.params.name,"&api_key=afd5ef428b7d104bd4ccdc3146c59390&format=json")).then((function(t){return t.json()}))]).then((function(t){var a=Object(N.a)(t,3),s=a[0],c=a[1],n=a[2];e.setState({data:s.artist,tracks:c.toptracks,albums:n.topalbums})}))}},{key:"render",value:function(){var t=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)(g,{}),Object(b.jsxs)("div",{className:"bg-image",style:{backgroundImage:"url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')"},children:[Object(b.jsx)("h1",{className:"artist-detail-heading",children:this.state.data.name?this.state.data.name:null}),Object(b.jsxs)("div",{className:"artist-detail-counter",children:[Object(b.jsxs)("p",{className:"followers",children:[Object(b.jsxs)("span",{children:[this.state.data.stats?this.state.data.stats.listeners:null," "]}),Object(b.jsx)("span",{children:"Playcount"})]}),Object(b.jsxs)("p",{className:"playcount",children:[Object(b.jsx)("span",{children:this.state.data.stats?this.state.data.stats.playcount:null}),Object(b.jsx)("span",{children:"Followers"})]})]})]}),Object(b.jsx)("ul",{className:"tags-wrapper",children:this.state.data.tags?this.state.data.tags.tag.map((function(t){return Object(b.jsx)("li",{className:"genre-tags tags-wrapper-item",children:Object(b.jsx)(m.b,{className:"genre-link",to:"/genre/".concat(t.name),children:t.name})})})):null}),Object(b.jsx)("p",{className:"description",children:this.state.data.bio?this.state.data.bio.summary:null}),Object(b.jsx)("h3",{style:{marginLeft:"15px"},children:"Top Tracks"}),Object(b.jsx)("div",{className:"inline-card-wrapper",children:this.state.tracks&&this.state.tracks.track?this.state.tracks.track.map((function(t){return Object(b.jsxs)("div",{className:"card-item",children:[Object(b.jsx)("img",{className:"card-image",src:"https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}),Object(b.jsx)("div",{className:"card-middle",children:Object(b.jsx)("div",{className:"card-text",children:t.name})})]})})):null}),Object(b.jsx)("h3",{style:{marginLeft:"15px"},children:"Top Albums"}),Object(b.jsx)("div",{className:"inline-card-wrapper",children:this.state.albums.album?this.state.albums.album.map((function(e){return Object(b.jsxs)("div",{class:"card-item",children:[Object(b.jsx)("img",{className:"card-image",src:e.image[3]["#text"]}),Object(b.jsx)("div",{className:"card-middle",children:Object(b.jsx)("div",{class:"card-text",children:Object(b.jsx)(m.b,{className:"genre-link",to:"/album/".concat(e.name,"/").concat(t.state.data.name),children:e.name})})})]})})):null})]})}}]),a}(s.Component));var A=function(){return Object(b.jsxs)("switch",{children:[Object(b.jsx)(r.a,{exact:!0,path:"/",component:v}),Object(b.jsx)(r.a,{exact:!0,path:"/genre/:name",component:O}),Object(b.jsx)(r.a,{exact:!0,path:"/artist/:name",component:w}),Object(b.jsx)(r.a,{exact:!0,path:"/album/:name/:id",component:y})]})},C=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,40)).then((function(e){var a=e.getCLS,s=e.getFID,c=e.getFCP,n=e.getLCP,i=e.getTTFB;a(t),s(t),c(t),n(t),i(t)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(m.a,{children:Object(b.jsx)(A,{})})}),document.getElementById("root")),C()}},[[39,1,2]]]);
//# sourceMappingURL=main.71893679.chunk.js.map