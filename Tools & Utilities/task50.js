const dropArea = document.getElementById("dropArea");
const fileInput = document.getElementById("fileInput");
const fileList = document.getElementById("fileList");


dropArea.addEventListener("dragover", function(e) {
  e.preventDefault();
  dropArea.style.borderColor = "darkgreen";
});

dropArea.addEventListener("dragleave", function() {
  dropArea.style.borderColor = "darkblue";
});

dropArea.addEventListener("drop", function(e) {
  e.preventDefault();
  dropArea.style.borderColor = "darkblue";
  const files = e.dataTransfer.files;
  showFiles(files);
})
fileInput.addEventListener("change", function() {
  showFiles(fileInput.files);
});

function showFiles(files) {
  fileList.innerHTML = "";
  for (let i = 0; i < files.length; i++) {
    const li = document.createElement("li");
    li.textContent = files[i].name + " (" + formatBytes(files[i].size) + ")";
    fileList.appendChild(li);
  }
}

function formatBytes(bytes) {
  const kb = bytes / 1024;
  if (kb < 1024) return kb.toFixed(1) + " KB";
  else return (kb / 1024).toFixed(1) + " MB";
}
