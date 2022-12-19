// const e3ds_control_toggle = document.querySelector('.e3ds_control_toggle')
// const e3ds_control_toggle_left = document.querySelector('.e3ds_control_toggle_left')
// const e3ds_control_toggle_icon = document.querySelector('.e3ds_control_toggle_icon')
// const e3ds_control_toggle_icon_left = document.querySelector('.e3ds_control_toggle_icon_left')
// const e3ds_bottom_panel_controls = document.querySelector('.e3ds_bottom_panel_controls')
// const e3ds_bottom_panel_controls_left = document.querySelector('.e3ds_bottom_panel_controls_left')
// let e3ds_controls_open_state = true
// let e3ds_controls_left_bottom_open_state = true;

// function hidemenuAtStart() {
//   e3ds_bottom_panel_controls.style.right = `-250px`
//   e3ds_controls_open_state = false
// }

// hidemenuAtStart()

// function openState(panelPosition = "right") {
//   if (panelPosition === "left") {
//     e3ds_bottom_panel_controls_left.style.left = '48px';
//     e3ds_control_toggle_icon_left.style.transform = 'rotate(0deg)'

//     e3ds_controls_left_bottom_open_state = true
//     return;
//   }
//   e3ds_bottom_panel_controls.style.left = '44px'
//   e3ds_control_toggle_icon.style.transform = 'rotate(0deg)'
//   e3ds_controls_open_state = true
// }
// function closeState(controls_width, panelPosition = "right") {
//   console.log("Closing ", panelPosition, controls_width);
//    controls_width = e3ds_bottom_panel_controls.offsetWidth;
//   if (panelPosition === "left") {
//     console.log("panel closing", panelPosition)
//     e3ds_bottom_panel_controls_left.style.left = `-${controls_width}px`
//     e3ds_controls_left_bottom_open_state = false;
//     return;
//   }

//   e3ds_bottom_panel_controls.style.left = `-${400}px`
//   e3ds_controls_open_state = false
// }
// let controls_width = e3ds_bottom_panel_controls.offsetWidth;

// function toggleState(panelPosition = "right") {
//   let handlePosition = "right";
//   console.log("Toggling", panelPosition);
//   let shouldOpen = true;
//   if (panelPosition === "left") {
//     shouldOpen = e3ds_controls_left_bottom_open_state;
//   } else {
//     shouldOpen = e3ds_controls_open_state;
//   }
//   if (shouldOpen) {
//     closeState(controls_width, panelPosition);
//   } else {
//     openState(panelPosition)
//   }
// }

// //toggleState()
// console.log(e3ds_control_toggle_left)
// e3ds_control_toggle.addEventListener('click', () =>
//   toggleState()
// )
// document.getElementById("voipControlPanel").style.display = "flex";
// openState("left");
// e3ds_control_toggle_left.addEventListener('click', () => {
//   let currentStatus = document.getElementById("voipControlPanel").style.display;
//   if (currentStatus === "block" || currentStatus === "flex") {
//     document.getElementById("voipControlPanel").style.display = "none";
//     closeState(controls_width, "left");
//   } else {
//     document.getElementById("voipControlPanel").style.display = "flex";
//     openState("left");
//   }
// }

// )

const sidebarToggle = (id) => {
  const bottomPanel = document.getElementById(id);

  bottomPanel.classList.toggle('hide');
};
