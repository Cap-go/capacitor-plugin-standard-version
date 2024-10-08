const regexIos = /private\slet\sPLUGIN_VERSION:\sString\s=\s"(.*)"/g

export function readVersion(contents) {
  const vString = contents.match(regexIos)
  const version = vString && vString[0] ? vString[0].replace(regexIos, '$1') : null
  return version
}

export function writeVersion(contents, version) {
  const newContent = contents.replace(
    regexIos,
    `private let PLUGIN_VERSION: String = "${version}"`,
  )
  return newContent
}
