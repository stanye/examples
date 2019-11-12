// 属性代理

export default FormHandler = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return <WrappedComponent 
        {...this.props}
      />
    }
  }
}

// 渲染劫持

const ComponentRender = (WrappedComponent) => {
  return class extends WrappedComponent {
    constructor() {
      super();
    }

    render() {
      if (this.props.aaa === 'sss') {
        return null;
      }
      return super.render();
    }
  }
}