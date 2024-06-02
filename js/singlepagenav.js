/**
 * Single Page Nav Plugin
 * Copyright (c) 2013 Chris Wojcik <hello@chriswojcik.net>
 * Dual licensed under MIT and GPL.
 * @author Chris Wojcik
 * @version 1.1.0
 */
if(typeof Object.create!=="function"){Object.create=function(e){function t(){}t.prototype=e;return new t}}(function(e,t,n,r){"use strict";var i={init:function(n,r){this.options=e.extend({},e.fn.singlePageNav.defaults,n);this.container=r;this.$container=e(r);this.$links=this.$container.find("a");if(this.options.filter!==""){this.$links=this.$links.filter(this.options.filter)}this.$window=e(t);this.$htmlbody=e("html, body");this.$links.on("click.singlePageNav",e.proxy(this.handleClick,this));this.didScroll=false;this.checkPosition();this.setTimer()},handleClick:function(t){var n=this,r=t.currentTarget,i=e(r.hash);t.preventDefault();if(i.length){n.clearTimer();if(typeof n.options.beforeStart==="function"){n.options.beforeStart()}n.setActiveLink(r.hash);n.scrollTo(i,function(){if(n.options.updateHash&&history.pushState){history.pushState(null,null,r.hash)}n.setTimer();if(typeof n.options.onComplete==="function"){n.options.onComplete()}})}},scrollTo:function(e,t){var n=this;var r=n.getCoords(e).top;var i=false;n.$htmlbody.stop().animate({scrollTop:r},{duration:n.options.speed,easing:n.options.easing,complete:function(){if(typeof t==="function"&&!i){t()}i=true}})},setTimer:function(){var e=this;e.$window.on("scroll.singlePageNav",function(){e.didScroll=true});e.timer=setInterval(function(){if(e.didScroll){e.didScroll=false;e.checkPosition()}},250)},clearTimer:function(){clearInterval(this.timer);this.$window.off("scroll.singlePageNav");this.didScroll=false},checkPosition:function(){var e=this.$window.scrollTop();var t=this.getCurrentSection(e);this.setActiveLink(t)},getCoords:function(e){return{top:Math.round(e.offset().top)-this.options.offset}},setActiveLink:function(e){var t=this.$container.find("a[href='"+e+"']");if(!t.hasClass(this.options.currentClass)){this.$links.removeClass(this.options.currentClass);t.addClass(this.options.currentClass)}},getCurrentSection:function(t){var n,r,i,s;for(n=0;n<this.$links.length;n++){r=this.$links[n].hash;if(e(r).length){i=this.getCoords(e(r));if(t>=i.top-this.options.threshold){s=r}}}return s||this.$links[0].hash}};e.fn.singlePageNav=function(e){return this.each(function(){var t=Object.create(i);t.init(e,this)})};e.fn.singlePageNav.defaults={offset:0,threshold:120,speed:400,currentClass:"current",easing:"swing",updateHash:false,filter:"",onComplete:false,beforeStart:false}})(jQuery,window,document)