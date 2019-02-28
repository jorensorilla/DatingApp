import { MemberEditComponent } from '../members/member-edit/member-edit.component';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

// used to prevent users from clicking other routes in the page causing problems like unsaved changes
// in a form or field
@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<MemberEditComponent> {
    canDeactivate(component: MemberEditComponent) {
        if (component.editForm.dirty) {
            return confirm('Are you sure you want to continue? Any unsaved changes will be lost');
        }
        return true;
    }
}
