export default class NewsItemTitle extends React.Component {
    render() {
      return (
        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{this.props.text}</Text>
        </View>
      )
    }
  }