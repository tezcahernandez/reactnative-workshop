export default class NewsItemSubtitle extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 16, fontStyle: 'italic' }}>{this.props.text}</Text>
      </View>
    )
  }
}