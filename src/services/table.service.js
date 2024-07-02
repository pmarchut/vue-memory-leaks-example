export const getColumnComponentName = (columnType) => {
  switch (columnType) {
    case 'string':
      return 'DefaultTableCell'
    case 'initialsRelationshipObject':
      return 'InitialsRelationshipCell'
    case 'label':
      return 'LabelCell'
    case 'copyInput':
      return 'CopyInputCell'
    case 'tagsRelationshipObject':
      return 'TagsRelationshipCell'
    default:
      return 'DefaultTableCell'
  }
}
