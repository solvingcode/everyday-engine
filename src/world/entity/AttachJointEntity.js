define(function (require) {

    const JointEntity = require('./JointEntity.js')

    class AttachJointEntity extends JointEntity {

        constructor(props) {
            super(props)
            this.attached = true
        }

    }

    return AttachJointEntity
})