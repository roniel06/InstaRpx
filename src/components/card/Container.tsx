import * as React from 'react'


interface IContainerProps {
    isCentered?: boolean
}

export default class Container extends React.Component<IContainerProps> {
    public render() {
        const { children, isCentered = false } = this.props;
        return (
            <div style={styles(isCentered)}>
                {children}
            </div>
        )
    }
}

const styles = (isCentered: boolean): React.CSSProperties => ({

    backgroundColor: '#eee',
    padding: '10px 15px ',
    width: 'calc(100vw - 30px)',
    height: 'calc(100vh - 20px)',
    display: 'flex',
    justifyContent: isCentered ? 'center' : undefined,
    alignItems: isCentered ? 'center' : undefined,
    flexDirection: 'column'



})