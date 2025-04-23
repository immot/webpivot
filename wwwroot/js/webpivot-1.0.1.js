
//   webpivot v1.0.0 

//   MIT License

//   Copyright 2025 周聰順 ( Tommi Chou )

//   Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), 
//   to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
//   and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

//   The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

//   THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
//   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
//   WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


$(function(){var d='<path d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/>';let v,y,x;window.webPivot=function(t,e){x=e,x.headerHeight=x.headerHeight||"30px",x.cellHeight=x.cellHeight||"25px",x.rightColumns.width=x.rightColumns.width||"100px",s(e),a(t,e)};let a=function(t,e){var a=Date.now();let s=e.leftColumns.map(t=>t.name);s.push(e.rightColumns.name),s.push(e.numberColumn);let l=[e.rightColumns.name];l=l.concat(e.leftColumns.map(t=>t.name)),l.push(e.numberColumn);let r=gb_start(t,s),i=gb_start(t,l);y=s.length-2,v=r,v.hide=E,v.show=I,i.loop();let d=[];e.leftColumns.forEach(t=>d.push({key:null,cc:0,tr:null}));let o,n,h="",c=[],g,p,u,f,m=new LayerChecker;n=$("<tr></tr>").appendTo("table.left-frame tbody");function b(t,e){var a=P({tag:"td",tr:n,text:x.sum.text,align:"center",height:x.cellHeight,columnPara:w(t+1)}).addClass("sum");return p=C(i,t,e),n=$("<tr></tr>").appendTo("table.left-frame tbody"),k(d,t),a}r.loop((t,e)=>{o=t[Object.keys(t)[2]],e<y?y-1==e?(P({tag:"td",tr:n,text:o,align:"center",height:x.cellHeight,columnPara:w(t.depth)}).attr("id",t.id).addClasses(t),d.forEach(t=>t.cc++),n=$("<tr></tr>").appendTo("table.left-frame tbody"),p&&(h+=T(c,p,f)),p=[],f=t.parentIds):(m.check(e,o,t,(t,e)=>{h+=T(c,p,f);var a=e.slice(t,t+1)[0].item;b(t,e).addClasses(a).attr("parentId",a.id),f=a.parentIds}),P({tag:"td",tr:n,text:o,align:"center",height:x.cellHeight,clickable:!0,columnPara:w(t.depth)}).attr("id",t.id).addClasses(t),ll="L-"+e,d[e].cc&&j(y,d,e),d[e].cc=0,d[e].key=o,d[e].tr=n):e==y&&(null==c.find(t=>o==t)&&(P({tag:"th",tr:"table.right-frame thead tr",text:o,align:"center",height:x.headerHeight,columnPara:x.rightColumns}),c.push(o)),u=t.sub[0][Object.keys(t.sub[0])[2]],p.push({key:o,val:u}))}),h+=T(c,p,f),m.endCheck((t,e)=>{b(t.layer,e).addClasses(t.item).attr("parentId",t.item.id),h+=T(c,p,t.item.parentIds)});for(let t=0;t<y-1;t++)j(y,d,t);$("table.right-frame tbody").append(h),H(),g=Date.now(),console.log("time:"+(g-a)/1e3)},w=function(t){return x.leftColumns.slice(t,t+1)[0]};$.fn.extend({addClasses:function(t){this.addClass(t.id);var e=this;return t.parentIds.forEach(t=>e.addClass(t)),this}});let C=function(t,e,a){let s=[],l,r;return t.sub.forEach(t=>{l=i(t.sub,0,e,a),r={key:t[Object.keys(t)[2]],val:l},s.push(r)}),s.sum=!0,s},i=function(t,a,s,l){let r;return a<=s&&t.forEach(e=>{l.find(t=>t.layer==a&&t.val==e[Object.keys(e)[2]])&&(r=a==s?e.sum:i(e.sub,1+a,s,l))}),r},k=function(t,e){0<=e&&(t[e].cc++,k(t,e-1))},T=function(t,a,e){let s,l,r,i,d,o;return i=d=x.cellHeight||"30px",o=x.rightColumns.width||"100px",a.sum&&e.push("sum"),r='<tr class="'+e.join(" ")+'" >',t.forEach(e=>{(s=a.find(t=>t.key==e))?(l=n(s.val),r+='<td style="padding:0;border:1px solid gray;"><div style="width:'+o+";height:"+i+";line-height:"+d+';margin:0;padding:0;text-align:right;">'+l+"</div></td>"):r+='<td style="padding:0;border:1px solid gray;"><div style="width:'+o+";height:"+i+";line-height:"+d+';margin:0;padding:0;text-align:right;"></div></td>'}),r+="</tr>",r},H=function(){t(),$("table.left-frame thead th").css("border","1px solid gray"),$("table.left-frame thead th div").css("position","relative").css("background-color","white").css("z-index",100),$("table.left-frame tbody td").css("vertical-align","top").css("border","1px solid gray"),$("table.right-frame thead th").css("border","1px solid gray"),$("<tr><td></td></tr>").appendTo("table.right-frame tbody").css("height","100px"),x.postDisplay&&x.postDisplay()},t=function(){let a,s,t=$("table.right-frame thead tr"),l=t.find("th").length,r;P({tag:"th",tr:t,text:x.sum.text,align:"center",height:x.headerHeight,columnPara:x.rightColumns}),$("table.right-frame tbody tr").each((t,e)=>{r=$(e).find("td").length;for(let t=0;t<l-r;t++)P({tag:"td",tr:e,text:" ",align:"right",height:x.cellHeight,columnPara:x.rightColumns}).css("border","1px solid gray");a=0,$(e).find("div").each((t,e)=>{isNaN(s=parseFloat($(e).text().replaceAll(",","")))||(a+=s)}),P({tag:"td",tr:e,text:a,align:"right",height:x.cellHeight,columnPara:x.rightColumns}).css("border","1px solid gray").addClass("sum")})},P=function(t){let e,a,s;e=a=t.height,s=t.columnPara&&t.columnPara.width||"100px";let l=$("<"+t.tag+"></"+t.tag+">").appendTo(t.tr).css("padding",0);var r=n(t.text);"td"==t.tag&&t.clickable?($('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16"></svg>').appendTo(l).css("float","left").css("vertical-align","top").html(d),l.css("cursor","pointer").addClass("minus").click(o)):"th"==t.tag&&setTimeout(()=>{t.columnPara.color&&i.css("color",t.columnPara.color),t.columnPara.backgroundColor&&i.css("background-color",t.columnPara.backgroundColor)},0);let i=$("<div></div>").appendTo(l).html(r).css("width",s).css("height",e).css("line-height",a).css("margin",0).css("padding",0).css("text-align",t.align);return l},o=function(t){let e=$(t.target).closest("td");t=e.attr("id");e.hasClass("minus")?(e.removeClass("minus").addClass("plus"),e.find("svg").html('<path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>'),v.hide(t)):(e.removeClass("plus").addClass("minus"),e.find("svg").html(d),v.show(t))},I=function(t){$("#"+t).removeClass("closed").addClass("opened"),$("td."+t).show(),$("tr."+t).show();let e=$("td."+t+".closed:not(#"+t+")").toArray().map(t=>parseInt(t.id.substring(1)));e.sort((t,e)=>e-t).forEach(t=>E("L"+t))},E=function(t){$("td."+t).hide(),$("tr."+t).hide(),$("#"+t).removeClass("opened").addClass("closed").show(),$("td.sum[parentId="+t+"]").show()};function n(t){return t?t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):""}let j=function(t,e,a){t=e[a].tr.children().length-t+a;e[a].tr.children().eq(t).attr("rowspan",e[a].cc)},s=function(t){let e,a;a=parseInt(x.height),$("div.webpivot").css("display","flex").css("overflow","hidden").css("height",x.height+"px").css("border","1px solid gray"),$("<table></table>").appendTo("div.webpivot").addClass("left-frame").css("width","200px").css("height",a-18+"px").css("border","1px solid gray").css("border-spacing",0).css("overflow","hidden").css("position","relative").append("<thead></thead>").append("<tbody></tbody>"),e=$("<tr></tr>").appendTo("table.left-frame thead"),t.leftColumns.forEach(t=>P({tag:"th",tr:e,text:t.name,align:"center",height:x.headerHeight,columnPara:t})),$("<table></table>").appendTo("div.webpivot").addClass("right-frame").css("float","right").css("width","100%").css("height",a+"px").css("border","1px solid gray").css("border-spacing",0).css("position","relative").append("<thead></thead>").append("<tbody></tbody>"),$("table.right-frame thead").css("position","absolute"),$("table.left-frame tbody").css("position","absolute"),$("table.right-frame tbody").css("display","block").css("position","absolute").css("height",a-parseInt(x.headerHeight)+"px").css("overflow","scroll");function s(){var t=$("div.webpivot").width()-$("table.left-frame").width();$("table.right-frame tbody").css("width",t+"px")}setTimeout(()=>{$("table.right-frame tbody").css("top",$("table.right-frame thead").height()+"px"),s()},0),$("<tr></tr>").appendTo("table.right-frame thead"),$(window).on("resize",()=>s()),$("table.right-frame tbody").on("scroll",function(t){$("table.right-frame thead").css("left",-t.target.scrollLeft),$("table.left-frame tbody").css("top",$("table.left-frame thead").height()-t.target.scrollTop)}),l()},l=function(){let e=0,a;$("table.left-frame tbody").on("wheel",function(t){e+=t.originalEvent.deltaY,e=0<e?e:0,a=-parseInt($("table.right-frame thead").css("left")),$("table.left-frame tbody")[0].scrollTo(0,e),$("table.right-frame tbody")[0].scrollTo(a,e)})}});    

$(function(){let d=function(n,t,i,u,e,r){let s,o=i[u];o&&(r=(s=n.find(n=>n[o]==t[o]))?JSON.parse(JSON.stringify(s.parentIds)):(s={sub:[],sum:0},s[o]=t[o],0<n.length&&(s.prevId=n[n.length-1].id),n.push(s),s.id=f(u,n.length),s.parentId=e,s.depth=u,null==r&&(r=[]),e&&r.push(e),s.parentIds=r,JSON.parse(JSON.stringify(r))),d(s.sub,t,i,1+u,s.id,r))},f=function(n,t){return window.idCount?window.idCount++:window.idCount=100,"L"+window.idCount};window.gb_start=function(n,t){let i=[],u={};return n.forEach(n=>d(i,n,t,0)),u.data=i,u.sub=i,u.loop=function(n){e(u,0,n)},u.search=r,u};let e=function(n,t,i){let u=0;return n.sub.forEach(n=>{i&&i(n,t),n.sub.length?u+=e(n,t+1,i):u=n.sum=n[Object.keys(n)[2]]}),n.sum=u,u},r=function(n,t){let i,u;for(t=t||this.sub,i=0;i<t.length;i++){if(t[i].id==n){u=t[i];break}if(u=r(n,t[i].sub))break}return u}});

class LayerChecker
{
    constructor()
    {
        this.layer = 'undefined' ;
        this.buf = [] ;
    }

    check = function( layer , val , it , callback )
    {
        if( this.layer == layer )
        {
            callback( this.layer , this.buf ) ;   
        }
        else
        {
            for( let i = this.layer ; i >= layer ; i-- )
            {
                callback( i , this.buf ) ;
            }
        }

        this.add( layer , val , it ) ;

        this.layer = layer ;
    }

    add = function( layer , val , it )
    {
        let f ;

        if( f = this.buf.find( x => x.layer == layer ) )
        {
            f.val = val ;
            f.item = it ;
        }
        else
        {
            this.buf.push( { layer:layer , val:val , item:it } ) ;
        }
    }

    endCheck = function( cb )
    {
        this.buf.reverse().forEach( x => cb( x , this.buf ) ) ;
    }
}