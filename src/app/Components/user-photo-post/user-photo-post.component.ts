import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImagePreview } from 'src/app/Interfaces/image-preview';
import { PostPhotoResponse } from 'src/app/Interfaces/post-photo-response';
import { ApiHandlerService } from 'src/app/Services/api-handler.service';

@Component({
  selector: 'app-user-photo-post',
  templateUrl: './user-photo-post.component.html',
  styleUrls: ['./user-photo-post.component.css'],
})
export class UserPhotoPostComponent implements OnInit {
  form: FormGroup;
  loading = false;
  error: string;

  imgPreview: ImagePreview;

  handleSubmit() {
    const formData = new FormData();
    formData.append('img', this.imgPreview.raw);
    formData.append('nome', this.form.get('name').value);
    formData.append('peso', this.form.get('weight').value);
    formData.append('idade', this.form.get('age').value);

    this.loading = true;
    this.apiHandler.request('POST', '/api/photo', formData).subscribe(
      (r: PostPhotoResponse) => {
        this.router.navigateByUrl('/account');
      },
      () => (this.error = 'Something went Wrong'),
      () => (this.loading = false)
    );
  }

  handleImgChange(event: any) {
    if (event.target.files[0]) {
      this.imgPreview = {
        preview: URL.createObjectURL(event.target.files[0]),
        raw: event.target.files[0],
      };
    } else {
      this.imgPreview = {
        preview: null,
        raw: null,
      };
    }
  }

  constructor(
    private fb: FormBuilder,
    private apiHandler: ApiHandlerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      weight: ['', Validators.required],
      age: ['', Validators.required],
    });
  }
}
