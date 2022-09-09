export default function (req, res) {
  const newLocation = req.originalUrl.replace(/\/spacestagram-vue/i, '')
  res.writeHead(301, { Location: newLocation })
  res.end()
}
