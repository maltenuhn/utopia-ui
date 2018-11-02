import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

function App() {
  const CELLHEIGHT_UTOPION = ' h24 '
  const FONTSIZE_UTOPION = ' f11 '
  const INDENTATION_PX = 14

  return (
    <div className="ma0 pa0 ba " style={{ cursor: 'default' }}>
      <MenuBar />
      <div id="flexrow-app" className="flex flex-row ">
        <VerticalMenu />
        <div id="layout-firstcolumn" className=" bg98" style={{ width: '300px' }}>
          <div id="ComponentPanel" className="flex flex-column">
            <MiniMenu className=" borderBottom92 justify-between ">
              <MiniMenuGroup>
                <MiniMenuItem>
                  <img className="w16 h16" src="https://uploads.codesandbox.io/uploads/user/2db013ac-c876-46ec-b4c6-b29cea25348c/CfkM-ico_align_left.png" />
                </MiniMenuItem>
                <MiniMenuItem>
                  <img className="w16 h16" src="https://uploads.codesandbox.io/uploads/user/2db013ac-c876-46ec-b4c6-b29cea25348c/Ey0k-ico_align_middle.png" />
                </MiniMenuItem>
                <MiniMenuItem>
                  <img className="w16 h16" src="https://uploads.codesandbox.io/uploads/user/2db013ac-c876-46ec-b4c6-b29cea25348c/3Cin-ico_align_right.png" />
                </MiniMenuItem>
                <MiniMenuItem>
                  <img className="w16 h16" src="https://uploads.codesandbox.io/uploads/user/2db013ac-c876-46ec-b4c6-b29cea25348c/DVoh-ico_align_top.png" />
                </MiniMenuItem>
                <MiniMenuItem>
                  <img className="w16 h16" src="https://uploads.codesandbox.io/uploads/user/2db013ac-c876-46ec-b4c6-b29cea25348c/iXSk-ico_align_center.png" />
                </MiniMenuItem>
                <MiniMenuItem>
                  <img className="w16 h16" src="https://uploads.codesandbox.io/uploads/user/2db013ac-c876-46ec-b4c6-b29cea25348c/uiNj-ico_align_bottom.png" />
                </MiniMenuItem>
                <MiniMenuItem>
                  <img className="w16 h16" src="https://uploads.codesandbox.io/uploads/user/2db013ac-c876-46ec-b4c6-b29cea25348c/qbwq-ico_ditri_ver_space.png" />
                </MiniMenuItem>
                <MiniMenuItem>
                  <img className="w16 h16" src="https://uploads.codesandbox.io/uploads/user/2db013ac-c876-46ec-b4c6-b29cea25348c/m5h--ico_ditri_hori_space.png" />
                </MiniMenuItem>
              </MiniMenuGroup>
            </MiniMenu>

            <span className="c50 fw5 pl4 pt4 uppercase">Component</span>
            <NavigatorTabs>
              <ComponentProperties />
            </NavigatorTabs>

            <Navigator>
              <NavigatorItem level={0} type="component">
                Home Screen II
              </NavigatorItem>
              <NavigatorItem level={1} type="view" clips>
                Outer Container
              </NavigatorItem>
              <NavigatorItem level={2} type="view">
                Scroll Container (horizontal)
              </NavigatorItem>
              <NavigatorItem level={3} type="component" componentName="Button">
                Split Pane component
              </NavigatorItem>
              <NavigatorItem level={4} type="view">
                Outer View
              </NavigatorItem>
              <NavigatorItem level={5} type="placeholder">
                Slot 1
              </NavigatorItem>
              <NavigatorItem level={5} type="placeholder" selected>
                Slot 2 <span className=" f9 pl4 c100">↜ Children</span>
              </NavigatorItem>
              <NavigatorItem level={4} type="view">
                Outer View
              </NavigatorItem>
              <NavigatorItem level={3} type="component" componentName="Button">
                Button
              </NavigatorItem>
              <NavigatorItem level={3} type="view">
                Scrollbar
              </NavigatorItem>

              <NavigatorItem level={1} type="group-closed" controlled>
                Button Bar
              </NavigatorItem>
              <NavigatorItem level={2} type="view">
                Button
              </NavigatorItem>
              <NavigatorItem level={3} type="image" generated>
                homeIcon
              </NavigatorItem>
              <NavigatorItem level={3} type="text" generated>
                Home
              </NavigatorItem>
              <NavigatorItem level={2} type="view" controlled generated>
                Home Button
              </NavigatorItem>
              <NavigatorItem level={3} type="image">
                feedIcon
              </NavigatorItem>
              <NavigatorItem level={3} type="text">
                Feed Button
              </NavigatorItem>
            </Navigator>

            <InsertMenu>
              <InsertGroup label="Elements">
                <InsertItem type="view" label="View" />
                <InsertItem type="image" label="Image" />
                <InsertItem type="text" label="Text" />
                <InsertItem type="group-open" label="Group" />
              </InsertGroup>

              <InsertGroup label="Composition">
                <InsertItem type="placeholder" label="Slot" />
                <InsertItem type="generator" label="Generator" />
              </InsertGroup>

              <InsertGroup label="Shapes (coming soon!)">
                <InsertItem type="rectangle" label="Rectangle" />
                <InsertItem type="ellipse" label="Ellipse" />
                <InsertItem type="polygon" label="Polygon" />
                <InsertItem type="arc" label="Arc" />
              </InsertGroup>

              <InsertGroup label="Motion">
                <InsertItem category="element" type="frictionArea" label="Friction Area" />
                <InsertItem category="physicsElement" type="snapPoint" label="Snap Point" />
                <InsertItem category="physicsElement" type="snapAnchor" label="Snap Anchor" />
                <InsertItem category="physicsElement" type="spring" label="Spring" />
                <InsertItem category="physicsElement" type="torsionSpring" label="Torsion Spring" />
              </InsertGroup>
            </InsertMenu>
          </div>
        </div>
        <Canvas />
        <NodeGraphContainer />
        <Inspector className="borderLeft92  bg98" style={{ width: '240px' }}>
          <MiniMenu className=" borderBottom92 justify-between ">
            <MiniMenuItem>
              <img src="https://uploads.codesandbox.io/uploads/user/2db013ac-c876-46ec-b4c6-b29cea25348c/YJXL-iconCommandAlignHorizontalLeft.svg" />
            </MiniMenuItem>
            <MiniMenuItem>
              <img src="https://uploads.codesandbox.io/uploads/user/2db013ac-c876-46ec-b4c6-b29cea25348c/YJXL-iconCommandAlignHorizontalLeft.svg" />
            </MiniMenuItem>
            <MiniMenuItem>
              <img src="https://uploads.codesandbox.io/uploads/user/2db013ac-c876-46ec-b4c6-b29cea25348c/YJXL-iconCommandAlignHorizontalLeft.svg" />
            </MiniMenuItem>
            <MiniMenuItem>
              <img src="https://uploads.codesandbox.io/uploads/user/2db013ac-c876-46ec-b4c6-b29cea25348c/YJXL-iconCommandAlignHorizontalLeft.svg" />
            </MiniMenuItem>
            <MiniMenuItem>
              <img src="https://uploads.codesandbox.io/uploads/user/2db013ac-c876-46ec-b4c6-b29cea25348c/YJXL-iconCommandAlignHorizontalLeft.svg" />
            </MiniMenuItem>
            <MiniMenuItem>
              <img src="https://uploads.codesandbox.io/uploads/user/2db013ac-c876-46ec-b4c6-b29cea25348c/YJXL-iconCommandAlignHorizontalLeft.svg" />
            </MiniMenuItem>
            <MiniMenuItem>
              <img src="https://uploads.codesandbox.io/uploads/user/2db013ac-c876-46ec-b4c6-b29cea25348c/YJXL-iconCommandAlignHorizontalLeft.svg" />
            </MiniMenuItem>
          </MiniMenu>
          <FlexRow className="c50 fw5 pl4 pt4 ph4 justify-between">
            <div className="">STATES</div>
            <div className="bg100 br2 borderAll90 pa2 darken f10">Add</div>
          </FlexRow>
          <StateSelector />
        </Inspector>
      </div>
    </div>
  )
}

function Inspector(props) {
  return (
    <div style={props.style} className={props.className}>
      {props.children}
    </div>
  )
}

function StateSelector(props) {
  return (
    <div className="pt8 f10">
      <FlexRow className="flex-wrap justify-between">
        <div className="br2 fw5 c30  pa4 ma4 bg94" style={{ width: '110px' }}>
          Default
        </div>
        <div className="br2 fw5 c100 pa4 mh4 bgblue" style={{ width: '110px' }}>
          Set{' '}
        </div>
        <div className="br2 fw5 c30  pa4 mh4 bg94" style={{ width: '110px' }}>
          Slow Connection
        </div>
        <div className="br2 fw5 c30  pa4 mh4 bg94" style={{ width: '110px' }}>
          Unnamed
        </div>
      </FlexRow>
    </div>
  )
}

function Canvas(props) {
  return (
    <div style={{ width: '1200px', height: '800px' }} className="borderLeft90 relative bg94">
      <MiniMenu className=" borderBottom90 justify-between ">
        <MiniMenuGroup>
          <MiniMenuItem>
            <img className="w16 h16" src="https://uploads.codesandbox.io/uploads/user/2db013ac-c876-46ec-b4c6-b29cea25348c/hbLP-ico_fit_parent.png" />
          </MiniMenuItem>
          <MiniMenuItem>
            <img className="w16 h16" src="https://uploads.codesandbox.io/uploads/user/2db013ac-c876-46ec-b4c6-b29cea25348c/wUfS-ico_fit_children.png" />
          </MiniMenuItem>
          <MiniMenuItem>
            <img className="w16 h16" src="https://uploads.codesandbox.io/uploads/user/2db013ac-c876-46ec-b4c6-b29cea25348c/NNrZ-ico_flip_hori.png" />
          </MiniMenuItem>
          <MiniMenuItem>
            <img className="w16 h16" src="https://uploads.codesandbox.io/uploads/user/2db013ac-c876-46ec-b4c6-b29cea25348c/jC2Y-ico_flip_ver.png" />
          </MiniMenuItem>
        </MiniMenuGroup>
        <MiniMenuGroup>
          <MiniMenuItem>
            <input id="lll1" type="checkbox" />
            <label for="lll1" className="c50">
              1px Snap
            </label>
          </MiniMenuItem>
          <MiniMenuItem>
            <input id="lll2" type="checkbox" />
            <label for="lll2" className="c50">
              Auto Resize
            </label>
          </MiniMenuItem>
          <MiniMenuItem>
            <div className="bg99 br2 borderAll90 pa2 darken c50">Add</div>
          </MiniMenuItem>{' '}
          <MiniMenuItem>
            <input id="lll4" type="checkbox" />
            <label for="lll4" className="c50">
              Intelligent Layout
            </label>
          </MiniMenuItem>{' '}
          <MiniMenuItem>
            <input id="lll5" type="checkbox" />
            <label for="lll5" className="c50">
              AI Layout
            </label>
          </MiniMenuItem>{' '}
          <MiniMenuItem>
            <input id="lll1" type="checkbox" />
            <label for="lll1" className="c50">
              Use Paperclips
            </label>
          </MiniMenuItem>
        </MiniMenuGroup>
      </MiniMenu>

      <div className="absolute borderAll80" style={{ left: '60px', top: '70px', width: '200px', height: '160px', backgroundColor: '#fff' }}>
        <div className="absolute f10 fw4 c50" style={{ top: '-14px', left: '-1px' }}>
          Custom Component{' '}
        </div>
      </div>

      <div className="absolute borderAll80" style={{ left: '259px', top: '270px', width: '200px', height: '160px', backgroundColor: '#fff' }}>
        <div className="absolute f10 fw4 c50" style={{ top: '-14px', left: '-1px' }}>
          Second Screen
        </div>
      </div>

      <div className="absolute borderAll80" style={{ left: '59px', top: '290px', width: '70px', height: '70px', backgroundColor: '#fff' }}>
        <div className="absolute " style={{ borderStyle: 'solid', borderWidth: '2px', borderColor: '#0379FF', left: '7px', top: '4px', width: '50px', height: '60px' }}>
          (hov<br />ered)
        </div>
      </div>

      <div className="absolute borderAll80" style={{ left: '159px', top: '470px', width: '50px', height: '50px', backgroundColor: '#fff' }}>
        <div className="absolute f10 fw4 c50" style={{ top: '-14px', left: '-1px', width: '100px' }}>
          <span style={{ color: '#4400FF' }}>Mini Screen</span>
        </div>
      </div>

      <div className="absolute borderAll80" style={{ left: '0px', top: '800px', width: '300px', height: '500px', backgroundColor: '#fff' }}>
        <Node />
      </div>

      <div id="guideline" className="absolute" style={{ backgroundColor: '#FF00FF', left: '259px', top: '70px', width: '1px', height: '360px' }} />
      <div id="guideline-intersection-marker-1" className="absolute br3" style={{ backgroundColor: '#FF00FF', left: '258px', top: '69px', width: '3px', height: '3px' }} />
      <div id="guideline-intersection-marker-2" className="absolute br3" style={{ backgroundColor: '#FF00FF', left: '258px', top: '228px', width: '3px', height: '3px' }} />

      <div
        id="topleft "
        className="absolute"
        style={{
          backgroundColor: 'white',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'hsl(0, 0%, 70%)',
          left: '257px',
          width: '7px',
          height: '7px',
          top: 'calc(270px - 3px)'
        }}
      />
      <div
        id="bottomleft "
        className="absolute"
        style={{
          backgroundColor: 'white',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'hsl(0, 0%, 70%)',
          left: '257px',
          width: '7px',
          height: '7px',
          top: 'calc(270px + 160px - 3px)'
        }}
      />
      <div
        id="bottomRight "
        className="absolute"
        style={{
          backgroundColor: 'white',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'hsl(0, 0%, 70%)',
          left: 'calc(257px + 200px - 3px)',
          width: '7px',
          height: '7px',
          top: 'calc(270px  - 3px)'
        }}
      />
      <div
        id="bottomRight "
        className="absolute"
        style={{
          backgroundColor: 'white',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'hsl(0, 0%, 70%)',
          left: 'calc(257px + 200px - 3px)',
          width: '7px',
          height: '7px',
          top: 'calc(270px + 160px - 3px)'
        }}
      />
    </div>
  )
}

function VerticalMenu(props) {
  return (
    <div id="verticalmenu" style={{ width: '56px' }} className="bg97 w40 flex flex-column borderRight92">
      <div className="flex flex-column items-center justify-center" style={{ height: '56px' }}>
        <span className="f32 fw7 " style={{ color: '#0BCE6A' }}>
          +
        </span>
      </div>
      <div className="flex flex-column items-center justify-center" style={{ height: '56px' }}>
        <img src="https://uploads.codesandbox.io/uploads/user/2db013ac-c876-46ec-b4c6-b29cea25348c/_uU8-icon.svg" />
      </div>
      <div className="flex flex-column items-center justify-center" style={{ height: '56px' }}>
        <span className="f32 fw7 c60">...</span>
      </div>
    </div>
  )
}

function NavigatorTabs(props) {
  return (
    <div>
      <div id="labels" className="mt12 flex ph4">
        <div className="uppercase fw5  f10 c30">Properties</div>
        <div className="uppercase fw5  f10 c60 ml16 darken">Interactions</div>
        <div className="uppercase fw5  f10 c60 ml16 darken">Callbacks</div>
      </div>
      <div id="content" className="mt8">
        {props.children}
      </div>
    </div>
  )
}

function ComponentProperties(props) {
  return (
    <table className="f10 bg100 c20 borderTop90 borderBottom90" style={{ width: '100%' }}>
      <div className="pa2 flex flex-row items-center">
        <FlexRow className="pa4 bg95 c30 br2 ">
          <div id="icon" style={{ width: '14px', height: '17px' }} className="br4 borderAll30" />
          <span className="pl4 br2 ">ButtonComponent</span>
        </FlexRow>
      </div>
      <tr className="h24 ">
        <td className="v-mid  pl16" style={{ minWidth: '30px' }}>
          <ExpansionArrow className="mr4 rotate45  " />
          <span>bgcolor</span>
        </td>
        <td style={{ minWidth: '30px' }}>value</td>
      </tr>
      <tr className="h24 v-mid  ">
        <td className="pl16" style={{ minWidth: '30px' }}>
          <ExpansionArrow className="mr4 rotate135 " />
          <span>customColor</span>
        </td>
        <td className="v-mid ">
          <div className="flex flex-row items-center">
            <ColorSwatch color="#888888" />
            <div className="pl4">#888888</div>
          </div>
        </td>
      </tr>
      <tr className="h24 v-mid  ">
        <td className="pl28" style={{ minWidth: '30px' }}>
          <ExpansionArrow className="mr4 rotate135 o0" />
          <span>RGB</span>
        </td>
        <td className="v-mid ">
          <div className="flex flex-row items-center">
            <ColorSwatch color="#ffee22" />
            <div className="pl4">#FFEE22</div>
          </div>
        </td>
      </tr>
      <tr className="h24 v-mid  ">
        <td className="pl28" style={{ minWidth: '30px' }}>
          <ExpansionArrow className="mr4 rotate135 o0 " />
          <span>alpha</span>
        </td>
        <td className="v-mid ">
          <div className="flex flex-row items-center">
            <ColorSwatch color="rgba(252,252,252,.3)" />
            <div className="pl4">20%</div>
          </div>
        </td>
      </tr>
      <tr className="h24 o5 v-mid  ">
        <td className="pl16" style={{ minWidth: '30px' }}>
          <ExpansionArrow className="mr4 rotate45" />
          <span>customColor</span>
        </td>
        <td className="v-mid ">
          <div className="flex flex-row items-center">
            <ColorSwatch color="#EEE" />
            <div className="pl4">#EEE</div>
          </div>
        </td>
      </tr>
      <div className="pa2 flex flex-row items-center">
        <FlexRow className="pa4 bg95 c30 br2 ">
          <div id="icon" style={{ width: '12px', height: '12px' }} className="br4 borderAll30" />
          <span className="pl4 br2 ">VideoPlayer</span>
        </FlexRow>
      </div>
      <tr className="h24 ">
        <td className="v-mid  pl16" style={{ minWidth: '30px' }}>
          <ExpansionArrow className="mr4 rotate45  " />
          <span>Video</span>
        </td>
        <td style={{ minWidth: '30px' }}>...</td>
      </tr>
      <tr className="h24 v-mid  ">
        <td className="pl16" style={{ minWidth: '30px' }}>
          <ExpansionArrow className="mr4 rotate135 " />
          <span>User</span>
        </td>
        <td className="v-mid ">
          <div className="flex flex-row items-center">
            <td style={{ minWidth: '30px' }}>...</td>
          </div>
        </td>
      </tr>
    </table>
  )
}

function FlexRow(props) {
  return (
    <div onClick={props.onClick} onMouseDown={props.onMouseDown} style={props.style} className={'flex flex-row items-center nowrap ' + props.className}>
      {props.children}
    </div>
  )
}

function MiniMenu(props) {
  return (
    <FlexRow style={{ overflow: 'hidden' }} id="minimenu" className={'h29 ph4 bg100 flex flex-row items-center f10 ' + props.className}>
      {props.children}
    </FlexRow>
  )
}

function MiniMenuGroup(props) {
  return <FlexRow>{props.children}</FlexRow>
}

function MiniMenuItem(props) {
  return <FlexRow className={'darken ph2 ' + props.className}>{props.children} </FlexRow>
}

function MenuBar(props) {
  return (
    <FlexRow style={{ width: '100%', height: '30px' }} className="items-stretch bg96 borderBottom92">
      <FlexRow style={{ width: '70px' }} className=" pv4">
        <div style={{ marginLeft: '6px', backgroundColor: '#F85E56', borderRadius: '6px', borderColor: '#ccc', width: '11px', height: '11px' }} />
        <div style={{ marginLeft: '6px', backgroundColor: '#F6B82D', borderRadius: '6px', borderColor: '#ccc', width: '11px', height: '11px' }} />
        <div style={{ marginLeft: '6px', backgroundColor: '#29C541', borderRadius: '6px', borderColor: '#ccc', width: '11px', height: '11px' }} />
      </FlexRow>
      <div className=" ph8 pv8 c50 menubar-highlight ">Home</div>
      <FlexRow className=" ph8 bg99 ">
        <Icon type="file" category="action" light />
        Pizzasound App <span className=" pl4 pv4 ml4 c80 delete-decorator">×</span>
      </FlexRow>
      <FlexRow className=" ph8 c50  menubar-highlight ">
        <img className="w16 h16 mr4" src="https://uploads.codesandbox.io/uploads/user/2db013ac-c876-46ec-b4c6-b29cea25348c/Vam--ico_navi_component.svg" />
        Pizza Slice Button <span className=" pl4  pv4 ml4 c80 delete-decorator">×</span>
      </FlexRow>
      <FlexRow className=" ph4 c50  menubar-highlight  ">
        <img className="w16 h16 mr4" src="https://uploads.codesandbox.io/uploads/user/2db013ac-c876-46ec-b4c6-b29cea25348c/jhv1-ico_navi_group_close.png" />
        Pizzasound App II <span className="pl4  pv4 ml4 c80 delete-decorator">×</span>
      </FlexRow>
      <div alt="spacer" className="flex-grow-1 pv8 " />
      <div alt="righthand icons" className="flex-shrink-0 pv8 ">
        <span className=" ph8 pv4 mr8 fw5 c100 br3 darken " style={{ backgroundColor: '#0C90E1' }}>
          Run
        </span>
      </div>
    </FlexRow>
  )
}

function CommandBar(props) {
  return <div className="">{props.children}</div>
}

function ExpansionArrow(props) {
  return (
    <img
      className={props.className + ' pr1'}
      src="https://uploads.codesandbox.io/uploads/user/2db013ac-c876-46ec-b4c6-b29cea25348c/UQlh-iconExpansionArrow5.svg"
      style={{ transformOrigin: '50% 30%' }}
    />
  )
}

function ColorSwatch(props) {
  return (
    <span className="db br2 w12 h12" style={{ boxSizing: 'border-box', backgroundColor: props.color, borderStyle: 'solid', borderWidth: '1px', borderColor: 'rgba(0,0,0,.3)' }} />
  )
}

function InsertMenu(props) {
  return <div className="f11 c10">{props.children}</div>
}

class InsertItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isSelected: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      isSelected: !this.state.isSelected
    }))
  }

  render() {
    return (
      <FlexRow onMouseDown={this.handleClick} className={!this.state.isSelected ? 'h27 br4 pl4  hover-outline ' : 'h27 br4 pl4 bgblue c100'}>
        <Icon category={this.props.category ? this.props.category : 'element'} type={this.props.type} light={this.state.isSelected} />
        <span className="pl8 ">{this.props.label}</span>
      </FlexRow>
    )
  }
}

function InsertGroup(props) {
  return (
    <div className="bg100 pb12">
      <FlexRow className="f10 fw5 h28 ph4 c35 ">{props.label}</FlexRow>
      {props.children}
    </div>
  )
}

function Navigator(props) {
  return <div>{props.children}</div>
}

function NavigatorItem(props) {
  const fillUtopion = () => {
    if (props.selected) {
      return 'bgblue br2 '
    } else if (props.type === 'component') {
      return ' bg100 '
    } else if (props.type === 'instance') {
      return 'bg96'
    } else return null
  }

  const textUtopion = () => {
    if (props.selected) {
      return 'white'
    } else if (props.isPartOfComponentInstance) {
      return 'c50'
    } else return null
  }

  return (
    <FlexRow className={'relative h27  ' + textUtopion() + ' ' + fillUtopion()}>
      {[...Array(props.level)].map(x => <IndentItem />)}
      <PostIt>^^ needs to only show the borders for elements that have a parent (immediate or otherwise) that crops them or provides a flexbox layout for them</PostIt>
      <FlexRow className="pl8 f11  ">
        <div id="icon" className="w24 relative  ">
          <Icon type={props.type} category="element" selected className="" />

          {!props.controlled ? null : (
            <React.Fragment>
              <div className="absolute " style={{ borderRadius: '6px', backgroundColor: 'white', width: '6px', height: '6px', right: '1px', bottom: '3px' }} />
              <div className="absolute " style={{ borderRadius: '6px', backgroundColor: '#00D572', width: '4px', height: '4px', right: '2px', bottom: '4px' }} />
            </React.Fragment>
          )}
          {!props.generated ? null : (
            <React.Fragment>
              <div className="absolute " style={{ borderRadius: '6px', backgroundColor: 'white', width: '6px', height: '6px', right: '5px', bottom: '3px' }} />
              <div className="absolute " style={{ borderRadius: '6px', backgroundColor: '#007EFF', width: '4px', height: '4px', right: '6px', bottom: '4px' }} />
            </React.Fragment>
          )}
          {!props.clips ? null : (
            <React.Fragment>
              <img src="" className="absolute " style={{ borderRadius: '0px', right: 'calc(50% - 7px) ', bottom: '-9px' }} />
            </React.Fragment>
          )}
        </div>

        <div className={' flex-grow-1 ' + textUtopion()}>{props.children}</div>
      </FlexRow>
      <div className="flex-grow-0 absolute c70 pr4 f10" style={{ right: '0px' }}>
        {props.componentName}
      </div>
    </FlexRow>
  )
}

function IndentItem(props) {
  return (
    <div className="h28 w14 db relative">
      <div className="absolute  borderRight90" style={{ top: '0', bottom: '0', left: '19px' }} />
    </div>
  )
}

function NodeGraphContainer(props) {
  return null
}

function NodeGraph(props) {
  return <div>{props.children}</div>
}

function Icon(props) {
  ;<PostIt>needs to be slightly more generic, or have different functions for returning different sizes. See the W18 H18 below, and the hardcoded 18 here.</PostIt>
  var url = 'https://utopia.app/hello/' + 'icon-' + props.category + '-' + props.type + '-' + (props.light ? 'white' : 'gray') + '-18x18@2x' + '.png'
  console.log(url)
  return <img src={url} alt={'Icon: ' + props.type} className="w18 h18" />
}

function PostIt(props) {
  return null
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

function Node(props) {
  return (
    <div className="bg98 br5 ">
      <FlexRow className=" f10 ph2 pt6">
        <div className="fw6">Absolute</div>
        <div className="flex-grow-1 ml8 br4 mt2 h2" style={{ backgroundColor: '#FF9800' }} />
      </FlexRow>
      <FlexRow>
        <div className="flex-grow-1">
          Inlets
          <div>. Inlet</div>
          <div className="w10 h10 relative ">
            <div className="absolute br2 bg20" style={{ left: '2px', top: '6px', width: '4px', height: '4px' }}>
              .....
            </div>
          </div>
          <div className="w10 h10 relative">
            <div className="w4 h4 absolute br2 bg90">...</div>
          </div>
        </div>
        <div className="flex-grow-1">Outlets</div>
      </FlexRow>
    </div>
  )
}
