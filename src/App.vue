<template>
    <h3>QuesoClickable</h3>
    <QuesoClickable>Clickable</QuesoClickable>
    <hr />

    <h3>QuesoDropdown</h3>
    <h5>Single choice</h5>
    <QuesoDropdown :options="dataOptions" />
    <h5>Multiple choice</h5>
    <QuesoDropdown :options="dataOptions" multiple />
    <hr />

    <h3>QuesoModal</h3>
    <button @click="openModal()">Open modal</button>
    <QuesoModal ref="myModal">
        <p>CONTENT HERE</p>
    </QuesoModal>
    <hr />

    <h3>QuesoCollapsible</h3>
    <QuesoCollapsible expand-on-mount>
        <template #headerText>
            <p>expand-on-mount Lorem ipsum dolor sit amet</p>
        </template>
        <template #content>
            <p>
                Consectetur adipiscing elit. Vivamus sed neque quis magna maximus finibus vel vitae mi. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Integer aliquet libero imperdiet, imperdiet sem vel, tempor
                justo. Nam malesuada nunc quam, at auctor erat tincidunt at. In luctus purus sit amet nibh pretium, sed
                tincidunt tortor dignissim. Mauris elit risus, pretium ut mattis eu, faucibus eu nulla. Donec congue
                ante vitae odio egestas bibendum. Donec maximus maximus lorem, non imperdiet mi fringilla vel. Donec
                dictum, nunc sed porttitor tempus, ante nibh vestibulum elit, at interdum magna est et dui. Sed at nibh
                neque. Vivamus mauris justo, eleifend eu metus ut, pellentesque molestie tellus. Nam accumsan lorem at
                enim consectetur, vel dapibus justo egestas. Vivamus vitae pretium dui. Vivamus non tortor ut neque
                tristique efficitur id eget nulla. Sed dui sapien, convallis sed tempus vel, pulvinar vitae nibh. Morbi
                hendrerit accumsan purus ac maximus.
            </p>
        </template>
    </QuesoCollapsible>
    <QuesoCollapsible>
        <template #headerText>
            <p>Lorem ipsum dolor sit amet</p>
        </template>
        <template #content>
            <p>
                Consectetur adipiscing elit. Vivamus sed neque quis magna maximus finibus vel vitae mi. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Integer aliquet libero imperdiet, imperdiet sem vel, tempor
                justo. Nam malesuada nunc quam, at auctor erat tincidunt at. In luctus purus sit amet nibh pretium, sed
                tincidunt tortor dignissim. Mauris elit risus, pretium ut mattis eu, faucibus eu nulla. Donec congue
                ante vitae odio egestas bibendum. Donec maximus maximus lorem, non imperdiet mi fringilla vel. Donec
                dictum, nunc sed porttitor tempus, ante nibh vestibulum elit, at interdum magna est et dui. Sed at nibh
                neque. Vivamus mauris justo, eleifend eu metus ut, pellentesque molestie tellus. Nam accumsan lorem at
                enim consectetur, vel dapibus justo egestas. Vivamus vitae pretium dui. Vivamus non tortor ut neque
                tristique efficitur id eget nulla. Sed dui sapien, convallis sed tempus vel, pulvinar vitae nibh. Morbi
                hendrerit accumsan purus ac maximus.
            </p>
        </template>
    </QuesoCollapsible>
    <hr />

    <h3>QuesoScrollable</h3>
    <QuesoScrollable>
        <p v-for="i in 8">
            Consectetur adipiscing elit. Vivamus sed neque quis magna maximus finibus vel vitae mi. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Integer aliquet libero imperdiet, imperdiet sem vel, tempor justo.
            Nam malesuada nunc quam, at auctor erat tincidunt at. In luctus purus sit amet nibh pretium, sed tincidunt
            tortor dignissim. Mauris elit risus, pretium ut mattis eu, faucibus eu nulla. Donec congue ante vitae odio
            egestas bibendum. Donec maximus maximus lorem, non imperdiet mi fringilla vel. Donec dictum, nunc sed
            porttitor tempus, ante nibh vestibulum elit, at interdum magna est et dui. Sed at nibh neque. Vivamus mauris
            justo, eleifend eu metus ut, pellentesque molestie tellus. Nam accumsan lorem at enim consectetur, vel
            dapibus justo egestas. Vivamus vitae pretium dui. Vivamus non tortor ut neque tristique efficitur id eget
            nulla. Sed dui sapien, convallis sed tempus vel, pulvinar vitae nibh. Morbi hendrerit accumsan purus ac
            maximus.
        </p>
    </QuesoScrollable>
    <hr />

    <h3>QuesoIcon</h3>
    <QuesoIcon name="chevron" :size="6" :rotation="90" />
    <hr />

    <h3>Fields</h3>
    <QuesoTextField name="textfield" label="QuesoTextField" v-model="TextField" />
    <QuesoTextField name="textfieldPassword" label="QuesoTextFieldPassword" type="password" v-model="TextFieldPassword"
        ><template #passwordToggle>Z</template></QuesoTextField
    >
    <QuesoTextArea name="textarea" label="QuesoTextArea" v-model="TextArea" />
    <QuesoCheckbox name="checkbox" label="QuesoCheckbox" v-model="Checkbox" />
    <QuesoSelect name="select" label="QuesoSelect" :options="dataOptions" v-model="Select" />
    <QuesoSwitch name="switch" label="QuesoSwitch" v-model="Switch" />
</template>

<script setup lang="ts">
import { ref } from "vue";

import {
    QuesoCheckbox,
    QuesoClickable,
    QuesoCollapsible,
    QuesoDropdown,
    QuesoIcon,
    QuesoModal,
    QuesoScrollable,
    QuesoSelect,
    QuesoSwitch,
    QuesoTextArea,
    QuesoTextField,
} from "./components";

const dataOptions = [
    {
        key: 1,
        data: {
            label: "Heavy Metal",
            icon: "bell",
        },
    },
    {
        key: 2,
        data: {
            label: "Classique",
            icon: "link",
        },
    },
    {
        key: 3,
        data: {
            label: "Funk and Disco",
            icon: "funnel",
        },
    },
    {
        key: 4,
        data: {
            label: "Folk and Acoustic",
            icon: "garbage",
        },
    },
    {
        key: 5,
        data: {
            label: "Country",
            icon: "lock",
        },
    },
    {
        key: 6,
        data: {
            label: "Dance and Electronic",
            icon: "magnify_glass",
        },
    },
];

// Modal
const myModal = ref<InstanceType<typeof QuesoModal> | null>(null);

const openModal = () => {
    myModal.value?.open();
};

// Fields
const TextField = ref("text field value");
const TextFieldPassword = ref("text field password value");
const TextArea = ref("text area value");
const Checkbox = ref(true);
const Select = ref([]);
const Switch = ref(false);
</script>

<style lang="scss">
:root {
    --queso-scrollable-height: 15rem;
}
</style>
