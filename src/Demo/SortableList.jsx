
/**
 *
 * @title DOM集合拖拽列表排序
 * @description list传dom集合
 *
 */

import React, { Component } from 'react';
import Dnd from 'bee-dnd';
import Icon from 'bee-icon';
import 'bee-icon/build/Icon.css';
import './style.css';

class Demo9 extends Component {

    onDragStart=(result,list)=>{
        console.log('开始');
    }
    onDragEnd=(result,list)=>{
        console.log('结束');
    }
    render() {
        let list=[ 
          <div className="a"><input type="text" name="email" placeholder="国籍/地区" /><div className="handle"><Icon type="uf-navmenu-light" /></div></div>,
          <div className="b"><input type="text" name="email" placeholder="省/州" /><div className="handle"><Icon type="uf-navmenu-light" /></div></div>,
          <div className="c"><input type="text" name="email" placeholder="城市" /><div className="handle"><Icon type="uf-navmenu-light" /></div></div>,
          <div className="d"><input type="text" name="email" placeholder="县区" /><div className="handle"><Icon type="uf-navmenu-light" /></div></div>,
          <div className="e"><input type="text" name="email" placeholder="地址1" /><div className="handle"><Icon type="uf-navmenu-light" /></div></div>];
        return (
           <Dnd list={list} handle=".handle" onStart={this.onDragStart} onStop={this.onDragEnd} />
        );
    }
}

export default Demo9