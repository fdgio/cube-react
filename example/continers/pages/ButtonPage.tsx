import * as React from 'react';
import { any } from 'prop-types';
import { CubeButton } from './../../../src/index';

export default class ButtonPage extends React.Component<{}, any> {
	render() {
		return (
			<div className="example-page-container">
				<p className="sub-header">普通按钮</p>
				<CubeButton>Button</CubeButton>
				<p className="sub-header">禁用按钮</p>
				<CubeButton disabled={true}>Button</CubeButton>
				<p className="sub-header">激活按钮</p>
				<CubeButton active={true}>Button</CubeButton>
				<p className="sub-header">primary按钮</p>
				<CubeButton primary={true}>Primary Button</CubeButton>
				<p className="sub-header">携带icon</p>
				<CubeButton icon="cubeic-right">Icon</CubeButton>
				<p className="sub-header">携带事件</p>
				<CubeButton onClick={(e) => alert('点击了按钮')}>Icon</CubeButton>
				<p className="sub-header">inline按钮</p>
				<CubeButton inline={true}>取消</CubeButton>
				<CubeButton inline={true} primary={true}>
					确认
				</CubeButton>
				<p className="sub-header">outline按钮</p>
				<CubeButton outline={true}>取消</CubeButton>
				<p className="sub-header">outline Primary</p>
				<CubeButton outline={true} primary={true}>
					取消
				</CubeButton>
			</div>
		);
	}
}
